import styles from './Highlights.module.css'
import {HighlightsES, HighlightsEN} from "../data/projects.ts";
import {useLang} from "../context/LangContext.tsx";
import {useState} from "react";
import type {HighlightProjects} from "../types";

export function Highlights()
{
    const {t, lang} = useLang();

    const [projects, setProjects] = useState<HighlightProjects[]>(
        lang === 'en' ? HighlightsEN : HighlightsES
    )
    
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
                            <div className={styles.actions}>
                                <button className={styles.button}>
                                    See more
                                </button>
                                <button className={styles.button}>
                                    See all projects
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}