import styles from './DirectContact.module.css'
import {contactInfo} from "../data/contact.ts";
import {useLang} from "../context/LangContext.tsx";

export function DirectContact() {

    const {t} = useLang()
    const {title, labels, ShortSubtitle} = t.contactPage

    const ShortContactList = [
        {label: labels.email, value: contactInfo.email, href: `mailto:${contactInfo.email}`},
        {label: labels.phoneCad, value: contactInfo.phoneCad, href: `tel:${contactInfo.phoneCad}`},
        {label: labels.linkedin, value: contactInfo.linkedin, href: `https://${contactInfo.linkedin}`
        },
    ]
    
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <h5 className={styles.subtitle}>
                {ShortSubtitle}
            </h5>
            <div className={styles.grid}>
                {ShortContactList.map(({label, value, href}) => (
                    <div key={href} className={styles.card}>
                        <p className={styles.label}>{label}</p>
                        {href ? (
                            <a href={href} className={styles.valueLink} target="_blank" rel="noreferrer">
                                {value}
                            </a>
                        ) : (
                            <p className={styles.value}>{value}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}