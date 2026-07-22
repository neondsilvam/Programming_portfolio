import {useState, useEffect} from 'react'
import {useLang} from '../context/LangContext'
import type {Project} from '../types'
import {UIExpES, UIExpEN} from '../data/projects'
import styles from './Proyectos.module.css'
import { motion } from "motion/react"
import {IntroVariant} from "../types/variants.ts";

export function UiExp() {
    const {t, lang} = useLang()

    const [projects, setProjects] = useState<Project[]>(
        lang === 'en' ? UIExpEN : UIExpES
    )
    const [selectedId, setSelectedId] = useState<string>(
        lang === 'en' ? UIExpEN[0].id : UIExpES[0].id
    )

    useEffect(() => {
        const nextProjects = lang === 'en' ? UIExpEN : UIExpES
        setProjects(nextProjects)
        setSelectedId(nextProjects[0].id)
    }, [lang])

    const selected = projects.find((p) => p.id === selectedId) ?? projects[0]

    function handleDesc() {
        setProjects(prev =>
            prev.map(p =>
                p.id === selectedId
                    ? {...p, isShowingTheProcess: !p.isShowingTheProcess}
                    : p
            )
        )
    }

    return (
        <motion.section
            variants={IntroVariant}
            initial='start'
            animate='static'
            exit='end'
            className={styles.section}>
            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    {t.uiExp.sections.map((sec) => {
                        const sectionProjects = projects.filter((p) => p.section === sec.id)
                        return (
                            <div key={sec.id} className={styles.sectionGroup}>
                                <p className={styles.sectionTitle}>{sec.label}</p>
                                {sectionProjects.map((proj) => (
                                    <button
                                        key={proj.id}
                                        className={`${styles.projBtn} ${selectedId === proj.id ? styles.active : ''}`}
                                        onClick={() => setSelectedId(proj.id)}
                                    >
                                        {proj.title}
                                    </button>
                                ))}
                            </div>
                        )
                    })}
                    <h5 className={styles.sectionSubTitle}>{t.uiExp.aclaration}</h5>
                </aside>

                <div className={styles.detail}>
                    <div className={styles.detailHeader}>
                        <h2 className={styles.detailTitle}>{selected.title}</h2>
                        <p className={styles.detailDesc}>{selected.description}</p>
                        {selected.hasExternalLinks ? (
                            <a href={selected.externalLinks} target="_blank" className={styles.detailDesc}>{selected.externalLinks}</a>) : (<></>)}
                    </div>
                    <div className={styles.iframeWrapper}>
                        {selected.iframeSrc ? (
                            <iframe
                                src={selected.iframeSrc}
                                title={selected.title}
                                className={styles.iframe}
                                allowFullScreen
                            />
                        ) : (
                            <img className={styles.iframe} src={selected.imageSrc}></img>
                        )}
                    </div>
                    <button className={styles.processButton}
                            onClick={handleDesc}>{selected.isShowingTheProcess ? t.uiExp.showingProcessButtonTextTrue : t.uiExp.showingProcessButtonTextFalse}</button>
                    {selected.isShowingTheProcess ? (
                        <div className={styles.processArea}>
                            <div className={styles.processFrame}>
                                <h4 className={styles.processTitle}>{selected.process.sections.preproduction.title}</h4>
                                <div className={styles.processOrganizer}>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.preproduction.description.map((t) => (
                                            <p className={styles.processDescription}>{t}</p>
                                        ))}
                                    </div>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.preproduction.media.map((t) => (
                                            <img className={styles.processMedia} src={t}></img>
                                        ))}
                                    </div>
                                </div>
                                <h4 className={styles.processTitle}>{selected.process.sections.production.title}</h4>
                                <div className={styles.processOrganizer}>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.production.media.map((t) => (
                                            <img className={styles.processMedia} src={t}></img>
                                        ))}
                                    </div>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.production.description.map((t) => (
                                            <p className={styles.processDescription}>{t}</p>
                                        ))}
                                    </div>
                                </div>
                                <h4 className={styles.processTitle}>{selected.process.sections.postproduction.title}</h4>
                                <div className={styles.processOrganizer}>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.postproduction.description.map((t) => (
                                            <p className={styles.processDescription}>{t}</p>
                                        ))}
                                    </div>
                                    <div className={styles.processSection}>
                                        {selected.process.sections.postproduction.media.map((t) => (
                                            <img className={styles.processMedia} src={t}></img>
                                        ))}
                                    </div>
                                </div>
                                <h5 className={styles.processSubtitle}>{selected.process.sectionFooter}</h5>
                            </div>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </motion.section>
    )
}
