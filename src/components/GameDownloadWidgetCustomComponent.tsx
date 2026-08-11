import styles from './GameDownloadWidgetCustomComponent.module.css'
import type {GameWidgetProps} from "../types";

export function GameDownloadWidgetCustomComponent({ id }: GameWidgetProps){
    return (
        <div className={styles.wrapper}>
            <iframe className={styles.frame} src={id}></iframe>
        </div>
    )
}