"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./text-generate-effect"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import rock from "../app/rock.jpg"
import linkedin from "../app/linkedin.svg"
import github from "../app/github.svg"

const words = `Hi, I'm Darion George, a software developer specializing in creating websites for small to medium-sized businesses, helping them establish a strong online presence. I have expertise in setting up and deploying scalable internet infrastructure solutions. I'm proficient in TypeScript, Python, SQL, and automation tools like n8n. Additionally, I have experience with backend data management, web scraping, manual testing, and other data-driven workflows to streamline processes. In my free time, I enjoy hiking and spending time with my famliy.`

function About() {
  return (
    <main
      id="about"
      className="relative  w-full  to-pink-800 px-8 sm:p-8 overflow-hidden bg-[#030303]"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl mb-4 mt-12  text-center text-white">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-300"> Developer | Hardware Enthusiast | Automation Expert</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
>
  <Image
    src={(rock as unknown as string) || "/placeholder.svg"}
    alt="Profile"
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-300 hover:scale-110"
  />
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-6 flex flex-col">
    <h2 className="text-xl sm:text-2xl font-bold text-white">Colorado Springs, Colorado</h2>
    <span></span>
    <p></p>
    <p className="text-white">6,237-ft</p>
  </div>
</motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 text-black backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center mb-4">
              <CheckCircledIcon className="w-6 h-6 text-green-400" />
              <p className="ml-2 text-lg font-bold text-white">Open To Work</p>
            </div>
            <TextGenerateEffect words={words} className="text-black" />
          </motion.div>
        </div>

        <footer className="mt-12 flex flex-col items-center space-y-6">
          <div className="flex gap-8">
            {[
              { href: "https://www.linkedin.com/in/darion-george/", src: linkedin, alt: "LinkedIn" },
              { href: "https://github.com/PKFireBarry", src: github, alt: "GitHub" },
            ].map((social) => (
              <motion.a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  width={40}
                  height={40}
                  src={social.src || "/placeholder.svg"}
                  alt={social.alt}
                  className="filter "
                />
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1q3wYHTx3Mac9t0_cjzqrhAWDg3hyhiG5/view?usp=share_link"
            className="text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </footer>
      </motion.div>
    </main>
  )
}

export default About

