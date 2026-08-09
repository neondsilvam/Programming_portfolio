import { useLang } from '../context/LangContext'
import { useNav } from '../context/NavContext'
import type { Page } from '../types'
import styles from './Navbar.module.css'
import {useState} from "react";
import {useScroll, useMotionValueEvent, motion} from 'motion/react'
import {ScrollVariantIn} from "../types/variants.ts";

export function Navbar() {
    const { t, toggleLang } = useLang();
    const { page: currentPage, changePage } = useNav();
    const { scrollY } = useScroll();
    const [scroll, setScroll] = useState<boolean>(false);

    /*For the different webpages*/
    const pages: { key: Page; label: string }[] = [
        { key: 'profile', label: t.nav.profile },
        { key: 'webExp', label: t.nav.web },
        { key: 'gameExp', label: t.nav.gameExp },
        { key: 'contact', label: t.nav.contact },
    ]
    
    // For the scroll animation
    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious() ?? 0
        setScroll(current > prev && current > 20)
    })
    

    return (
        <motion.nav
            variants={ScrollVariantIn}
            initial={scroll ? "moving" : "start"}
            whileInView={scroll ? "end" : "static"}
            className={styles.navFlow}
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
        </motion.nav>
    )
}