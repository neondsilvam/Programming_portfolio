import styles from './CVButtonComponent.module.css'
import { useLang } from "../context/LangContext.tsx";
import { useEffect, useState } from "react";

// Documents
import gameDocEN from '../Documents/CV_Julian_Silva_EN_Gameplay.pdf'
import gameDocES from '../Documents/CV_Julian_Silva_ES_Gameplay.pdf'
import webDocEN from '../Documents/CV_Julian_Silva_FullStack_EN.pdf'
import webDocES from '../Documents/CV_Julian_Silva_FullStack_ES.pdf'
import type {PagePops} from "../types";

export function CVButtonComponent({ currentPage }: PagePops) {
    const { t, lang } = useLang();
    const options = currentPage === 'webExp' ? [webDocEN, webDocES] : [gameDocEN, gameDocES];

    const [cvDocument, setCvDocument] = useState(
        lang === 'en' ? options[0] : options[1]
    );

    useEffect(() => {
        setCvDocument(lang === 'en' ? options[0] : options[1]);
    }, [lang, currentPage]);

    return (
        <a className={styles.link} href={cvDocument} download>
            <button className={styles.button}>
                {currentPage === 'webExp' ? t.webProjects.CVText : t.gameExp.CVText}
            </button>
        </a>
    )
}