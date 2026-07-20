import { useLang } from '../context/LangContext'
import styles from './Perfil.module.css'
import Perfil_photo from '../assets/Perfil_photo.jpg'
import {useEffect, useState} from "react"

export function Perfil() {
  const { t } = useLang()
  const { name, role, description, tags, catchPhrase, identitySentence } = t.profilePage;
    
  const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(false);
    }, []);
    
  return (
    <section className={isMounted ? styles.section : styles.section}>
      <div className={styles.firstPageArea}>
        <h1 className={styles.catchPhrase}>{catchPhrase}</h1>
        <h5 className={styles.identityPhrase}>{identitySentence}</h5>
      </div>
      <div className={styles.profileArea}>
        <div className={styles.avatar}>
                  <img src={Perfil_photo}/>
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>{role}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
