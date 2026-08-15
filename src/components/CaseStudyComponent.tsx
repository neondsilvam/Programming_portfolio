import styles from "./CaseStudyComponent.module.css"
import type {CaseStudy} from "../types";
import {useLang} from "../context/LangContext.tsx";
import {useState} from "react";

interface CaseStudyComponentProps {
    CaseStudy: CaseStudy[];
}

export function CaseStudyComponent({CaseStudy}: CaseStudyComponentProps) {
    const {t} = useLang()

    return(
        <div className={styles.CaseStudy}>
            <h2 className={styles.title}>{t.StudyCaseInfo.Title}</h2>
            <div className={styles.organizer}>
                {CaseStudy.map((c) => (
                    <CaseStudyItem key={c.title} caseStudy={c} />
                ))}
            </div>
        </div>
    )
}

/*inner function to manage the individual states*/

function CaseStudyItem({caseStudy}: {caseStudy: CaseStudy}) {
    const {t} = useLang()
    const [display, setDisplay] = useState<boolean>(false)

    return (
        <div className={styles.CaseStudyContainer}>
            <h3 className={styles.CaseTitle}>
                {caseStudy.title}
            </h3>
            {display ? (<>
                    <h4 className={styles.context}>{caseStudy.description.context}</h4>
                    <h4 className={styles.problem}>{caseStudy.description.problem}</h4>
                    <h4 className={styles.possibilities}>{caseStudy.description.possibilities}</h4>
                    <h4 className={styles.desicion}>{caseStudy.description.decision}</h4>
                    <h4 className={styles.outcome}>{caseStudy.description.outcome}</h4>
                </>
            ) : (<></>)}
            <button className={styles.CaseButton} onClick={() => setDisplay(!display)}>
                {display ? t.StudyCaseInfo.buttonSaveText : t.StudyCaseInfo.buttonText}
            </button>
        </div>
    )
}