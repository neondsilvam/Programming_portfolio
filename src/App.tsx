import { ContentProvider } from './tools/contentProvider.tsx'
import { useContent } from './tools/contentContext'
import { LangProvider } from './tools/LangProvider.tsx'
import { NavProvider, useNav } from './context/NavContext'
import { Navbar } from './components/Navbar'
import { Profile } from './pages/Profile'
import { WebProjects } from './pages/WebProjects'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'
import { GameExp } from './pages/GameExp.tsx'
import './App.css'
import { Loadder } from './components/Loadder.tsx'
import { AnimatePresence } from 'motion/react'

function AppContent() {
    const { page } = useNav()

    const renderPage = () => {
        switch (page) {
            case 'profile':
                return <Profile />
            case 'webExp':
                return <WebProjects />
            case 'gameExp':
                return <GameExp initialIndex={0} />
            case 'contact':
                return <Contact />
        }
    }

    return (
        <div className="app">
            <AnimatePresence>
                <Navbar />
                <main className="main">{renderPage()}</main>
                <Footer />
            </AnimatePresence>
        </div>
    )
}

function AppGate() {
    const { status } = useContent()
    const isReady = status === 'connected'

    return (
        <>
            {isReady && (
                <LangProvider>
                    <NavProvider>
                        <AppContent />
                    </NavProvider>
                </LangProvider>
            )}

            <AnimatePresence>
                {!isReady && <Loadder key="loader" />}
            </AnimatePresence>
        </>
    )
}

export default function App() {
    return (
        <ContentProvider>
            <AppGate />
        </ContentProvider>
    )
}