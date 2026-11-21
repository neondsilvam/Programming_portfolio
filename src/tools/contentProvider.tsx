import type { ReactNode } from "react";
import { useFirebaseConnection } from "./useFirebaseConnections";
import { ContentContext } from "./contentContext";

// Este archivo exporta SOLO el componente (requisito de Fast Refresh).

/** Ejecuta useFirebaseConnection UNA vez y comparte el resultado con toda la app. */
export function ContentProvider({ children }: { children: ReactNode }) {
    const connection = useFirebaseConnection();
    return <ContentContext.Provider value={connection}>{children}</ContentContext.Provider>;
}