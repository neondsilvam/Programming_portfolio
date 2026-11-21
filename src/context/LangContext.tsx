import { createContext, useContext } from 'react'
import type { Lang, Translations, Project, HighlightProjects } from '../types'

// Solo el contexto y el hook. El componente vive en LangProvider.tsx
// (separarlos permite que Vite haga Fast Refresh).

export interface LangContextValue {
    lang: Lang
    t: Translations
    toggleLang: () => void
    webProjects: Project[]
    gameExp: Project[]
    highlights: HighlightProjects[]
}

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang(): LangContextValue {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error('useLang must be used inside LangProvider')
    return ctx
}