import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
import { WebProjects } from './pages/WebProjects'
import { MobileProjects } from './pages/MobileProjects'
import { Contacto } from './pages/Contacto'
import type {Page} from './types'
import { Footer } from './components/Footer'
import {GameExp} from "./pages/GameExp.tsx";
import {UiExp} from "./pages/UiExp.tsx";
import './App.css'
import {Loadder} from "./components/Loadder.tsx";
import { AnimatePresence } from 'motion/react'

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('perfil')

  const renderPage = () => {
    switch (currentPage) {
      case 'perfil':
        return <Perfil />
      case 'web':
        return <WebProjects />
      case 'mobile':
        return <MobileProjects />
      case 'gameExp':
        return <GameExp />
      case 'uiExp':
        return <UiExp />
      case 'contacto':
        return <Contacto />
    }
  }

  return (
    <div className="app">
      <AnimatePresence>
        <Loadder />
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="main">{renderPage()}</main>
        <Footer />
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}
