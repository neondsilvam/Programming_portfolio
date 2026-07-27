import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
import { WebProjects } from './pages/WebProjects'
import { Contacto } from './pages/Contacto'
import type {Page} from './types'
import { Footer } from './components/Footer'
import {GameExp} from "./pages/GameExp.tsx";
import './App.css'
import {Loadder} from "./components/Loadder.tsx";
import { AnimatePresence } from 'motion/react'

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('profile')

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Perfil />
      case 'webExp':
        return <WebProjects />
      case 'gameExp':
        return <GameExp />
      case 'contact':
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
