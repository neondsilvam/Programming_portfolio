import { createContext, type ReactNode, useContext, useState } from "react";
import type { Page } from "../types";

interface NavContextValue {
    page: Page
    changePage: (page: Page) => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
    const [page, setPage] = useState<Page>('profile')

    const changePage = (newPage: Page) => setPage(newPage)

    return (
        <NavContext.Provider value={{ page, changePage }}>
            {children}
        </NavContext.Provider>
    )
}

export function useNav(): NavContextValue {
    const ctx = useContext(NavContext)
    if (!ctx) throw new Error('useNav must be used inside NavProvider')
    return ctx
}