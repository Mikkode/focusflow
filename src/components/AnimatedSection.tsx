"use client"

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight"
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fadeIn"
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 20 : 0,
      x: animation === "slideLeft" ? -20 : animation === "slideRight" ? 20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
} 