"use client"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export default function HeroFlightOverlay({
  logoSrc = "/Logo.png",
}: { logoSrc?: string }) {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={reduce ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl"
        animate={reduce ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating drone with trail effect */}
      <motion.div
        className="absolute right-[15%] top-[35%] z-10"
        initial={{ opacity: 0, x: -100, y: 50 }}
        animate={reduce ? { opacity: 1, x: 0, y: 0 } : {
          opacity: 1,
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative">
          {/* Glow effect behind drone */}
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-150" />
          
          <Image
            src={logoSrc}
            alt="BluMist Drone"
            width={120}
            height={120}
            className="relative drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500"/>
          </pattern>
        </defs>
        <motion.rect 
          width="100%" 
          height="100%" 
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>

      {/* Particle dots */}
      {!reduce && [0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}
