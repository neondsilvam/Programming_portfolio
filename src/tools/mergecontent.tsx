import type { Project, HighlightProjects } from "../types/index";
import type {
    LocalHighlightData,
    LocalProjectData,
    ProcessStage,
    RemoteHighlight,
    RemoteProject,
} from "../types/index";


const EMPTY_PROJECT_ASSETS: LocalProjectData = {
    imageSrc: "",
    media: { preproduction: [], production: [], postproduction: [] },
};

export function mergeProject(
    remote: RemoteProject,
    local: LocalProjectData | undefined,
    where: string
): Project {
    if (!local) {
        console.warn(`[content] No hay imágenes locales para ${where}; se mostrará sin imágenes.`);
    }
    const assets = local ?? EMPTY_PROJECT_ASSETS;

    const withMedia = (stage: ProcessStage) => ({
        ...remote.process.sections[stage],
        media: assets.media[stage],
    });

    return {
        ...remote,
        imageSrc: assets.imageSrc,
        process: {
            ...remote.process,
            sections: {
                preproduction: withMedia("preproduction"),
                production: withMedia("production"),
                postproduction: withMedia("postproduction"),
            },
        },
    };
}

export function mergeHighlight(
    remote: RemoteHighlight,
    local: LocalHighlightData | undefined
): HighlightProjects {
    if (!local) {
        console.warn(`[content] No hay datos locales para el destacado ${remote.id}.`);
    }
    return {
        ...remote,
        imgSrc: local?.imgSrc ?? "",
        posInList: local?.posInList ?? Number.MAX_SAFE_INTEGER,
    };
}