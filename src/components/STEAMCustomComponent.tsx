import styles from './STEAMCustomComponent.module.css'
import type {STEAMProps} from "../types";

export function STEAMCustomComponent({ id }: STEAMProps){
    return (
        <div className={styles.wrapper}>
            <iframe className={styles.frame} src={id}></iframe>
        </div>
    )
}