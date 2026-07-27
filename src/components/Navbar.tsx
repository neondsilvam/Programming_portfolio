import { useLang } from '../context/LangContext'
import { useNav } from '../context/NavContext'
import type { Page } from '../types'
import styles from './Navbar.module.css'

export function Navbar() {
    const { t, toggleLang } = useLang()
    const { page: currentPage, changePage } = useNav()

    const pages: { key: Page; label: string }[] = [
        { key: 'profile', label: t.nav.profile },
        { key: 'webExp', label: t.nav.web },
        { key: 'gameExp', label: t.nav.gameExp },
        { key: 'contact', label: t.nav.contact },
    ]

    return (
        <nav
            className={styles.nav}
        >
            <span className={styles.logo}>{t.nav.logo}</span>

            <div className={styles.links}>
                {pages.map(({ key, label }) => (
                    <button
                        key={key}
                        className={`${styles.link} ${currentPage === key ? styles.active : ''}`}
                        onClick={() => changePage(key)}
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