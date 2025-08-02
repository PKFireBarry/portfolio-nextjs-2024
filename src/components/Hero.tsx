"use client";

import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import Image from "next/image"
import { cn } from "../lib/utils"
import React, { useEffect, useState } from "react";
import desert from "../app/desert .jpg";

const subheading = "Let's Transform Ideas into Powerful Experiences With Tailored Digital Solutions."

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

function DigitalRain({ terminalState }: { terminalState: number }) {
  const [rainDrops, setRainDrops] = useState<Array<{id: number, x: number, delay: number}>>([])

  useEffect(() => {
    const drops = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: (i * window.innerWidth / 120) + (Math.random() * 20 - 10),
      delay: Math.random() * 8
    }))
    setRainDrops(drops)
  }, [])

  // Terminal states that should stop/glitch the rain
  const isFlatlining = terminalState === 4 // USER FLATLINED
  const isSignalLost = terminalState === 5 // SIGNAL LOST
  const isReconnecting = terminalState === 6 // RECONNECTING...
  
  const shouldStopRain = isFlatlining || isSignalLost || isReconnecting
  const shouldGlitch = isFlatlining || isSignalLost

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glitchy breakdown transition into flatline */}
      {isFlatlining && (
        <>
          {/* Screen tearing breakdown effect - first 3 seconds */}
          <motion.div
            className="absolute inset-0 z-25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {/* Horizontal tears appearing progressively */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              {/* Multiple horizontal sections breaking down */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 w-full bg-red-900/20"
                  style={{ 
                    top: `${i * 12.5}%`, 
                    height: '12.5%',
                    borderTop: i > 0 ? '1px solid rgba(239, 68, 68, 0.3)' : 'none'
                  }}
                  animate={{
                    transform: [
                      'translateX(0px)',
                      `translateX(${Math.random() * 40 - 20}px)`,
                      `translateX(${Math.random() * 60 - 30}px)`,
                      `translateX(${Math.random() * 80 - 40}px)`
                    ],
                    opacity: [1, 0.8, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
            
            {/* Progressive corruption overlay */}
            <motion.div
              className="absolute inset-0"
              initial={{ 
                background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(239, 68, 68, 0.1) 2px, rgba(239, 68, 68, 0.1) 4px)'
              }}
              animate={{
                background: [
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(239, 68, 68, 0.1) 2px, rgba(239, 68, 68, 0.1) 4px)',
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(239, 68, 68, 0.3) 1px, rgba(239, 68, 68, 0.3) 2px)',
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 0.5px, rgba(239, 68, 68, 0.5) 0.5px, rgba(239, 68, 68, 0.5) 1px)'
                ]
              }}
              transition={{
                duration: 2.5,
                ease: "easeIn"
              }}
            />
          </motion.div>

          {/* Black Screen of Death - appears after glitch breakdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="absolute inset-0 bg-black z-30 flex items-center justify-center"
          >
            <div className="text-center">
              <div
                className="text-red-400 font-mono text-lg mb-4"
                style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
              >
                SYSTEM FAILURE
              </div>
              <div className="text-red-300 font-mono text-sm opacity-80">
                Connection terminated
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Screen tearing and corruption effects during signal lost */}
      {isSignalLost && (
        <>
          {/* Background corruption stripes */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'repeating-linear-gradient(0deg, transparent 0px, transparent 4px, rgba(239, 68, 68, 0.05) 4px, rgba(239, 68, 68, 0.05) 8px)',
                'repeating-linear-gradient(0deg, transparent 0px, transparent 6px, rgba(239, 68, 68, 0.08) 6px, rgba(239, 68, 68, 0.08) 12px)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Screen tearing horizontal offset effects */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ mixBlendMode: 'difference' }}
          >
            {/* Top section tear */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-red-900/10"
              style={{ height: '33%' }}
              animate={{
                transform: [
                  'translateX(0px)',
                  'translateX(8px)',
                  'translateX(-4px)',
                  'translateX(12px)',
                  'translateX(0px)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            
            {/* Middle section tear */}
            <motion.div
              className="absolute top-1/3 left-0 w-full bg-red-900/10"
              style={{ height: '33%' }}
              animate={{
                transform: [
                  'translateX(0px)',
                  'translateX(-6px)',
                  'translateX(10px)',
                  'translateX(-8px)',
                  'translateX(0px)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Bottom section tear */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-red-900/10"
              style={{ height: '34%' }}
              animate={{
                transform: [
                  'translateX(0px)',
                  'translateX(15px)',
                  'translateX(-10px)',
                  'translateX(5px)',
                  'translateX(0px)'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </>
      )}

      {rainDrops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ x: drop.x, y: -50 }}
          animate={shouldStopRain ? { 
            y: -50,
            opacity: 0.2
          } : { 
            y: window.innerHeight + 50,
            opacity: 1
          }}
          transition={shouldStopRain ? {
            opacity: { duration: 1 },
            y: { duration: 0 }
          } : {
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
            delay: drop.delay
          }}
          className={cn(
            "absolute w-px h-12",
            shouldGlitch 
              ? "bg-gradient-to-b from-transparent via-red-400/60 to-transparent" 
              : "bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
          )}
        />
      ))}
    </div>
  )
}

function TerminalStatus({ onStateChange }: { onStateChange: (state: number) => void }) {
  const [currentState, setCurrentState] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [userInfo, setUserInfo] = useState("")

  // Get user system info
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const platform = navigator.platform || 'UNKNOWN'
      const browser = navigator.userAgent.includes('Chrome') ? 'CHROME' : 
                     navigator.userAgent.includes('Firefox') ? 'FIREFOX' :
                     navigator.userAgent.includes('Safari') ? 'SAFARI' :
                     navigator.userAgent.includes('Edge') ? 'EDGE' : 'UNKNOWN'
      
      const connection = (navigator as any).connection?.effectiveType || 'UNKNOWN'
      const cores = navigator.hardwareConcurrency || 'UNKNOWN'
      
      setUserInfo(`${platform} | ${browser} | ${cores} CORES`)
    }
  }, [])
  
  const states = [
    { text: "AUTHENTICATING USER", duration: 20000 },     // 20s
    { text: "SYSTEM READY", duration: 15000 },            // 15s
    { text: userInfo || "DETECTING SYSTEM...", duration: 45000 }, // 45s - show user info
    { text: "UPLOADING...", duration: 40000, showDots: true },  // 40s
    { text: "USER FLATLINED", duration: 8000, isError: true },   // 8s
    { text: "SIGNAL LOSS DUE TO SYSTEM CORRUPTION", duration: 6000, isError: true }, // 6s
    { text: "RECONNECTING...", duration: 15000, showDots: true }, // 15s - time for blur effect
    { text: "SIGNAL FOUND", duration: 8000 },             // 8s
    { text: "REAUTHENTICATING USER", duration: 6000 },    // 6s
    { text: "SYSTEM ONLINE", duration: 17000 }            // 17s
  ]  // Total: ~180 seconds = 3 minutes

  useEffect(() => {
    onStateChange(currentState)
  }, [currentState, onStateChange])

  useEffect(() => {
    const currentText = states[currentState].text
    setIsTyping(true)
    setDisplayedText("")

    // Typewriter effect
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
      }
    }, 80) // Typing speed

    // Move to next state after duration
    const stateTimer = setTimeout(() => {
      setCurrentState((prev) => (prev + 1) % states.length)
    }, states[currentState].duration)

    return () => {
      clearInterval(typeInterval)
      clearTimeout(stateTimer)
    }
  }, [currentState])

  const currentStateData = states[currentState]

  return (
    <div className="absolute top-24 left-8 z-20">
      <div className="bg-black/60 backdrop-blur-sm border border-green-400/30 rounded px-4 py-2 font-mono text-sm">
        <span
          className={cn(
            "text-green-400",
            currentStateData.isError && "text-red-400",
            "drop-shadow-sm"
          )}
          style={{
            textShadow: currentStateData.isError 
              ? '0 0 5px rgba(239, 68, 68, 0.5)' 
              : '0 0 5px rgba(34, 197, 94, 0.5)'
          }}
        >
          {displayedText}
          {currentStateData.showDots && !isTyping && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              ...
            </motion.span>
          )}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className={cn(
            "ml-1",
            currentStateData.isError ? "text-red-400" : "text-green-400"
          )}
        >
          █
        </motion.span>
      </div>
    </div>
  )
}

export default function HeroGeometric({
  badge = "",
  title1 = "Darion George",
  title2 = "Developer",
}) {
  const [terminalState, setTerminalState] = useState(0)
  
  // Check if image should glitch
  const isFlatlining = terminalState === 4  // Updated index
  const isSignalLost = terminalState === 5  // Updated index
  const isReconnecting = terminalState === 6 // Updated index
  const shouldGlitchImage = isFlatlining || isSignalLost

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.5 + i * 0.3,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Digital rain background */}
      <DigitalRain terminalState={terminalState} />
      
      {/* Terminal status */}
      <TerminalStatus onStateChange={setTerminalState} />

      {/* Subtle scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-10" 
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(34, 197, 94, 0.1) 2px,
              rgba(34, 197, 94, 0.1) 4px
            )`
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 md:mb-12 relative"
          >
            <motion.div
              animate={shouldGlitchImage ? {
                opacity: 0,
                scale: 0.9
              } : isReconnecting ? {
                opacity: [0, 1],
                scale: [0.9, 1],
                filter: ['blur(10px)', 'blur(0px)']
              } : {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
              }}
              transition={shouldGlitchImage ? {
                duration: 0.5,
                ease: "easeInOut"
              } : isReconnecting ? {
                duration: 8,
                ease: "easeOut"
              } : {
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Image
                src={desert}
                height="700"
                width="700"
                className="rounded-full object-cover w-[350px] h-[350px] hover:scale-110 ease-in-out duration-300 border-2 border-green-400/20"
                alt="thumbnail"
                style={{
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-white bg-gradient-to-b from-white to-white/80 drop-shadow-sm"
                style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-white bg-gradient-to-b from-white to-white/80 font-light",
                  inter.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 drop-shadow-sm">
            {subheading}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
    </div>
  )
}