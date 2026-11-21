import { useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { LangContext } from '../context/LangContext'
import { useLoadedContent } from './contentContext'

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en')
    const content = useLoadedContent()

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