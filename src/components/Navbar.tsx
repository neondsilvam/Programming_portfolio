import { useLang } from '../context/LangContext'
import type {Page} from '../types'
import styles from './Navbar.module.css'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { t, toggleLang } = useLang()

  const pages: { key: Page; label: string }[] = [
    { key: 'perfil', label: t.nav.perfil },
    { key: 'web', label: t.nav.web },
    { key: 'gameExp', label: t.nav.gameExp },
    { key: 'uiExp', label: t.nav.uiExp },
    { key: 'mobile', label: t.nav.mobile },
    { key: 'contacto', label: t.nav.contacto },
  ]

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{t.nav.logo}</span>

      <div className={styles.links}>
        {pages.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.link} ${currentPage === key ? styles.active : ''}`}
            onClick={() => onNavigate(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <button className={styles.langBtn} onClick={toggleLang}>
        {t.nav.langBtn}
      </button>
    </nav>
  )
}
