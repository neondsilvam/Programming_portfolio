import {useLang} from '../context/LangContext'
import {contactInfo} from '../data/contact'
import styles from './Contacto.module.css'

export function Contacto() {
    const {t} = useLang()
    const {title, subtitle1, subtitle2, labels} = t.contact

    const items = [
        {label: labels.email, value: contactInfo.email, href: `mailto:${contactInfo.email}`},
        {label: labels.phoneCol, value: contactInfo.phoneCol, href: `tel:${contactInfo.phoneCol}`},
        {label: labels.phoneCad, value: contactInfo.phoneCad, href: `tel:${contactInfo.phoneCad}`},
        {label: labels.linkedin, value: contactInfo.linkedin, href: `https://${contactInfo.linkedin}`},
        {label: labels.MainGithub, value: contactInfo.MainGithub, href: `https://github.com/${contactInfo.MainGithub}`},
        {label: labels.SecondaryGithub, value: contactInfo.SecondaryGithub, href: `https://github.com/${contactInfo.SecondaryGithub}`
        },
    ]

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.subtitle}>{subtitle1}</h4>
            <h4 className={styles.subtitle}>{subtitle2}</h4>
            <div className={styles.grid}>
                {items.map(({label, value, href}) => (
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
        </section>
    )
}
