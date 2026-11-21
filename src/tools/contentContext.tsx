import { createContext, useContext } from "react";
import type { SiteContent, FirebaseConnection } from "../types/index";

export const ContentContext = createContext<FirebaseConnection | null>(null);

export function useContent(): FirebaseConnection {
    const ctx = useContext(ContentContext);
    if (!ctx) throw new Error("useContent debe usarse dentro de <ContentProvider>");
    return ctx;
}

export function useLoadedContent(): SiteContent {
    const { content } = useContent();
    if (!content) {
        throw new Error("El contenido aún no está cargado. Renderiza este componente solo cuando status === 'connected'.");
    }
    return content;
}