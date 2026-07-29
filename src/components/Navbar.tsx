import { useLang } from '../context/LangContext'
import { useNav } from '../context/NavContext'
import type { Page } from '../types'
import styles from './Navbar.module.css'
import {type RefObject, useLayoutEffect, useRef, useState} from "react";

function useIsOverflow(ref: RefObject<HTMLElement | null>): boolean {
    const [isOverflow, setIsOverflow] = useState<boolean>(false);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        const checkOverflow = () => {
            const hasOverflow =
                element.scrollHeight > element.clientHeight ||
                element.scrollWidth > element.clientWidth;

            setIsOverflow(hasOverflow);
        };

        checkOverflow();
        
        const resizeObserver = new ResizeObserver(checkOverflow);
        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, [ref]);

    return isOverflow;
}

export function Navbar() {
    const { t, toggleLang } = useLang();
    const { page: currentPage, changePage } = useNav();
    const containerRef = useRef<HTMLDivElement>(null);
    const isOverflowing = useIsOverflow(containerRef);

    const pages: { key: Page; label: string }[] = [
        { key: 'profile', label: t.nav.profile },
        { key: 'webExp', label: t.nav.web },
        { key: 'gameExp', label: t.nav.gameExp },
        { key: 'contact', label: t.nav.contact },
    ]

    return (
        <nav
            ref={containerRef}
            className={isOverflowing ? styles.navInnerFlow : styles.navOuterFlow}
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