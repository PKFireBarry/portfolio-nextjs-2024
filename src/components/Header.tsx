'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, FileText, Github, Linkedin, Mail } from 'lucide-react';

function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full backdrop-blur-sm bg-black/80 border-b border-zinc-800/50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <Link 
            href="#home" 
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home size={20} />
          </Link>

          <a 
            href="https://flowcv.com/resume/us9nujrp4p" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Resume"
          >
            <FileText size={20} />
          </a>

          <a 
            href='https://www.linkedin.com/in/darion-george/' 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a 
            href='https://github.com/PKFireBarry' 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        <a 
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} />
          <span className="hidden sm:inline text-sm font-medium">Contact</span>
        </a>
      </div>
    </motion.header>
  )
}

export default Header