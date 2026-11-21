import styles from './Loadder.module.css'
import { begginingVariant } from '../types/variants.ts'
import { motion } from 'motion/react'
import { useContent } from '../tools/contentContext.tsx'


export function Loadder() {
    const { status, error, retry } = useContent()

    return (
        <motion.div
            className={styles.StartUp}
            variants={begginingVariant}
            initial="start"
            animate="start"
            exit="end"                 // se ejecuta cuando AnimatePresence lo quita
            transition={{ duration: 1.5 }}
        >
            {status === 'error' ? (
                <div className={styles.ErrorBox}>
                    <p className={styles.ErrorText}>No se pudo cargar el contenido / Could not load content</p>
                    <small className={styles.ErrorSmall}>{error}</small>
                    <button className={styles.ErrorButton} onClick={() => retry()}>
                        Reintentar / Retry
                    </button>
                </div>
            ) : (
                <LoadingCircleSpinner />
            )}
        </motion.div>
    )
}

function LoadingCircleSpinner() {
    return (
            <motion.div
                className={styles.Spinner}
                animate={{ transform: "rotate(360deg)" }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
    )
}