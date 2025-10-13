"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function Reveal({
  children,
  delay = 0,
}: { children: ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother motion
        delay 
      }}
    >
      {children}
    </motion.section>
  )
}
