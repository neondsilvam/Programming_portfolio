import styles from './Loadder.module.css'
import { begginingVariant } from '../types/variants.ts'
import { motion } from 'motion/react'

export function Loadder() {
    return (
        <motion.div
            className={styles.StartUp}
            variants={begginingVariant}
            initial="start"
            animate="end"
            transition={{ duration: 1.5, delay: 1 }}
        >
            <LoadingCircleSpinner />
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