import { useCallback, useEffect, useRef, useState } from "react";
import { FirebaseError } from "firebase/app";
import { loadAllContent } from "../tools/contentSource";
import type { ContentStatus, SiteContent, FirebaseConnection } from "../types/index";

const TIMEOUT_MS = 15_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(
            () => reject(new Error(`Tiempo de espera agotado (${ms / 1000}s) conectando con Firebase`)),
            ms
        );
        promise.then(
            (value) => { clearTimeout(timer); resolve(value); },
            (err) => { clearTimeout(timer); reject(err); }
        );
    });
}

function toMessage(err: unknown): string {
    if (err instanceof FirebaseError) return `${err.code}: ${err.message}`;
    if (err instanceof Error) return err.message;
    return "Error desconocido";
}

/**
 * Conecta con Firebase y descarga todo el contenido en un solo paso.
 * "connected" = el servidor respondió Y el contenido llegó completo.
 *
 * ⚠️ Llámalo SOLO dentro de ContentProvider. En los componentes usa useContent(),
 * porque cada llamada a este hook hace su propia descarga.
 */
export function useFirebaseConnection(): FirebaseConnection {
    const [status, setStatus] = useState<ContentStatus>("checking");
    const [error, setError] = useState<string | null>(null);
    const [latencyMs, setLatencyMs] = useState<number | null>(null);
    const [content, setContent] = useState<SiteContent | null>(null);

    const mounted = useRef(true);
    useEffect(() => {
        mounted.current = true;
        return () => { mounted.current = false; };
    }, []);

    const retry = useCallback(async (): Promise<boolean> => {
        setStatus("checking");
        setError(null);
        const start = performance.now();

        try {
            const data = await withTimeout(loadAllContent(), TIMEOUT_MS);
            if (!mounted.current) return false;

            setContent(data);
            setLatencyMs(Math.round(performance.now() - start));
            setStatus("connected");
            return true;
        } catch (err) {
            if (!mounted.current) return false;

            console.error("[firebase] Error conectando/cargando contenido:", err);
            setError(toMessage(err));
            setStatus("error");
            return false;
        }
    }, []);

    useEffect(() => {
        void retry();
    }, [retry]);

    return {
        status,
        error,
        latencyMs,
        content,
        isConnected: status === "connected",
        isChecking: status === "checking",
        retry,
    };
}