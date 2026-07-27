import styles from './Highlights.module.css'
import {HighlightsEN, HighlightsES} from "../data/projects.ts";
import {useLang} from "../context/LangContext.tsx";
import {useEffect, useState} from "react";
import type {HighlightProjects} from "../types";
import {useNav} from "../context/NavContext.tsx";

export function Highlights()
{
    const {t, lang} = useLang();
    const { changePage } = useNav()

    const [projects, setProjects] = useState<HighlightProjects[]>(
        lang === 'en' ? HighlightsEN : HighlightsES
    )

    useEffect(() => {
        const nextProjects = lang === 'en' ? HighlightsEN : HighlightsES
        setProjects(nextProjects)
    }, [lang])
    
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>
                {t.profilePage.Highlights.title}
            </h3>
            <h4 className={styles.subtitle}>
                {t.profilePage.Highlights.subTitle}
            </h4>
            <div className={styles.organizer}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.highlights}>
                        <h4 className={styles.heading}>
                            {project.title}
                        </h4>
                        <div className={styles.container}>
                            <img className={styles.media} src={project.imgSrc} />
                            <p className={styles.description}>
                                {project.description}
                            </p>
                            <button
                                className={styles.button}
                                onClick={() => changePage(project.section)}>
                                {t.profilePage.seeMore}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}