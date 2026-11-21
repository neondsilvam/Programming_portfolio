import { useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { LangContext } from '../context/LangContext'
import { useLoadedContent } from './contentContext'

// Este archivo exporta SOLO el componente (requisito de Fast Refresh).

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en')
    const content = useLoadedContent() // ambos idiomas ya están descargados

    const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

    const current = content[lang]

    return (
        <LangContext.Provider
            value={{
                lang,
                t: current.texts,
                toggleLang,
                webProjects: current.webProjects,
                gameExp: current.gameExp,
                highlights: current.highlights,
            }}
        >
            {children}
        </LangContext.Provider>
    )
}