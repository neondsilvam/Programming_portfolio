import styles from './Footer.module.css'
import {motion, useMotionValueEvent, useScroll} from "motion/react";
import {useState} from "react";
import {ScrollVariantOut} from "../types/variants.ts";

export function Footer() {
    const { scrollY } = useScroll();
    const [scroll, setScroll] = useState<boolean>(false);
    
    // For the scroll animation
    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious() ?? 0
        setScroll(current > prev && current > 150)
    })
    
    return (
        <motion.footer
            variants={ScrollVariantOut}
            initial={scroll ? "moving" : "start"}
            whileInView={scroll ? "end" : "static"}
            className={styles.footer}>
            <h4 className={styles.subtext}>&copy; Julian D Silva - 2026</h4>
        </motion.footer>
    )
}