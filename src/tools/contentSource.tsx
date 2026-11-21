import { collection, doc, getDocFromServer, getDocsFromServer } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "../context/Firebase";
import { localHighlights, localProjects } from "../data/localAssets";
import { mergeHighlight, mergeProject } from "./mergecontent";
import type {
    Lang,
    LangContent,
    ProjectCategory,
    RemoteHighlight,
    RemoteProject,
    SiteContent,
    SiteTexts,
} from "../types/index";

// ─────────────────────────────────────────────
// Estructura en Firestore
//
// translations/
//   en  → { nav, profilePage, webProjects, gameExp, contactPage, StudyCaseInfo }
//   es
//
// projects/            (un documento por proyecto)
//   WebProjectsEN_p1, WebProjectsES_p1, ...
//   GameExpEN_p1,     GameExpES_p1, ...
//   HighlightsEN_p1,  HighlightsES_p1, ...
// ─────────────────────────────────────────────
const TEXTS_COLLECTION = "translations";
const PROJECTS_COLLECTION = "projects";

type ListName = ProjectCategory | "highlights";

// Prefijo del ID del documento → nombre de la lista en el código
const PREFIX_TO_LIST: Record<string, ListName> = {
    WebProjects: "webProjects",
    GameExp: "gameExp",
    Highlights: "highlights",
};

const SUFFIX_TO_LANG: Record<string, Lang> = { EN: "en", ES: "es" };

// Ej: "GameExpEN_p3" → prefix "GameExp", lang "EN", id "p3"
const DOC_ID_PATTERN = /^(WebProjects|GameExp|Highlights)(EN|ES)_(.+)$/;

type RawDoc = { id: string } & Record<string, unknown>;
type Grouped = Record<Lang, Record<ListName, RawDoc[]>>;

function toMessage(err: unknown) {
    return err instanceof FirebaseError ? err.code : "error";
}

// getDocFromServer / getDocsFromServer van siempre al servidor:
// si responden, la conexión está verificada.
async function fetchSiteTexts(lang: Lang): Promise<SiteTexts> {
    const path = `${TEXTS_COLLECTION}/${lang}`;

    let snap;
    try {
        snap = await getDocFromServer(doc(db, TEXTS_COLLECTION, lang));
    } catch (err) {
        console.error(`[content] Falló la lectura de ${path}:`, err);
        throw new Error(`${toMessage(err)} al leer "${path}"`);
    }

    if (!snap.exists()) throw new Error(`No existe el documento ${path}`);

    const data = snap.data();
    const required = ["nav", "profilePage", "webProjects", "gameExp", "contactPage", "StudyCaseInfo"];
    const missing = required.filter((key) => !(key in data));
    if (missing.length) throw new Error(`${path} no tiene: ${missing.join(", ")}`);

    return data as SiteTexts;
}

/** Lee TODA la colección projects en una sola consulta y la agrupa por idioma y lista. */
async function fetchGroupedProjects(): Promise<Grouped> {
    let snap;
    try {
        snap = await getDocsFromServer(collection(db, PROJECTS_COLLECTION));
    } catch (err) {
        console.error(`[content] Falló la lectura de ${PROJECTS_COLLECTION}:`, err);
        throw new Error(`${toMessage(err)} al leer la colección "${PROJECTS_COLLECTION}"`);
    }

    const grouped: Grouped = {
        en: { webProjects: [], gameExp: [], highlights: [] },
        es: { webProjects: [], gameExp: [], highlights: [] },
    };

    snap.forEach((d) => {
        const match = DOC_ID_PATTERN.exec(d.id);
        if (!match) {
            console.warn(`[content] Documento ignorado (nombre no reconocido): ${PROJECTS_COLLECTION}/${d.id}`);
            return;
        }
        const [, prefix, langSuffix, idFromDocName] = match;
        const data = d.data();
        // Si el documento ya trae un campo id se respeta; si no, se usa el del nombre ("p1")
        grouped[SUFFIX_TO_LANG[langSuffix]][PREFIX_TO_LIST[prefix]].push({ ...data, id: (data.id as string) ?? idFromDocName });
    });

    // Si falta alguna lista completa, mejor fallar que mostrar una página vacía
    for (const lang of ["en", "es"] as const) {
        for (const [prefix, list] of Object.entries(PREFIX_TO_LIST)) {
            if (grouped[lang][list].length === 0) {
                throw new Error(`No se encontró ningún documento ${prefix}${lang.toUpperCase()}_* en "${PROJECTS_COLLECTION}"`);
            }
        }
    }

    return grouped;
}

/**
 * Firestore devuelve los documentos ordenados por ID (p1, p2, p3).
 * El orden de la página se toma del orden en que aparecen las claves en localAssets.ts
 * (ej. gameExp: p3, p2, p1 → Rekindled primero). Los que no estén ahí van al final.
 */
function sortByLocalOrder<T extends { id: string }>(items: T[], order: string[]): T[] {
    const pos = (id: string) => {
        const i = order.indexOf(id);
        return i === -1 ? Number.MAX_SAFE_INTEGER : i;
    };
    return [...items].sort((a, b) => pos(a.id) - pos(b.id));
}

function assertProject(p: RemoteProject, where: string) {
    if (!p?.title) throw new Error(`${where}: el proyecto no tiene title`);
    for (const stage of ["preproduction", "production", "postproduction"] as const) {
        if (!p.process?.sections?.[stage]) {
            throw new Error(`${where}: falta process.sections.${stage}`);
        }
    }
}

function buildLang(lang: Lang, texts: SiteTexts, grouped: Grouped): LangContent {
    const buildProjects = (category: ProjectCategory) => {
        const remote = grouped[lang][category] as unknown as RemoteProject[];
        const ordered = sortByLocalOrder(remote, Object.keys(localProjects[category]));

        return ordered.map((p) => {
            const where = `${PROJECTS_COLLECTION}/${category}${lang.toUpperCase()}_${p.id}`;
            assertProject(p, where);
            return mergeProject(p, localProjects[category][p.id], where);
        });
    };

    const remoteHighlights = grouped[lang].highlights as unknown as RemoteHighlight[];

    return {
        texts,
        webProjects: buildProjects("webProjects"),
        gameExp: buildProjects("gameExp"),
        highlights: remoteHighlights
            .map((h) => mergeHighlight(h, localHighlights[h.id]))
            .sort((a, b) => a.posInList - b.posInList),
    };
}

/** Descarga todo en paralelo (3 lecturas). Si algo falla, rechaza la promesa completa. */
export async function loadAllContent(): Promise<SiteContent> {
    const [en, es, grouped] = await Promise.all([
        fetchSiteTexts("en"),
        fetchSiteTexts("es"),
        fetchGroupedProjects(),
    ]);

    return {
        en: buildLang("en", en, grouped),
        es: buildLang("es", es, grouped),
    };
}