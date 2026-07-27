import { useLang } from '../context/LangContext'
import type {NavbarProps, Page} from '../types'
import styles from './Navbar.module.css'
import {motion} from 'motion/react'
import {ScrollVariant} from "../types/variants.ts";


export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { t, toggleLang } = useLang()

  const pages: { key: Page; label: string }[] = [
    { key: 'profile', label: t.nav.profile },
    { key: 'webExp', label: t.nav.web },
    { key: 'gameExp', label: t.nav.gameExp },
    { key: 'contact', label: t.nav.contact },
  ]

  return (
    <motion.nav
    variants={{ScrollVariant}}
    initial='start'
    whileInView='static'
        className={styles.nav}>
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
    </motion.nav>
  )
}
