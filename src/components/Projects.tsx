"use client"

import React, { useState } from 'react'
import ProjectCard from './project-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';




const projects = [
  {
    title: "Borkin Industries",
    description:
      "A client needed a website to showcase their services, so I built a responsive and mobile-friendly site using Next.js and Tailwind CSS. The design featured a clean, modern layout with a simple yet effective contact form. Hosted on Vercel, the website delivered a seamless user experience and successfully met the client's needs.",
    tags: [ "Next.js", "Tailwind", "Shadcn UI"],
    link: "https://github.com/PKFireBarry/pet-services",
    image: "https://i.ibb.co/DxQW7rn/Screenshot-From-2025-02-02-17-25-15.png" ,
    website: "https://pet-services-ten.vercel.app/",
  },
  {
    title: "PrompterWave",
    description:
      "PrompterWave began as a solution to achieve better Stable Diffusion prompts. It bridges the gap between imagination and execution, helping users generate creative and effective prompts. The platform operates as a subscription-based web app, utilizing Stripe integration for seamless payment processing.",
    tags: [ "Next.js", "OpenAI", "Firebase", "Tailwind", "Shadcn UI", "SaaS", "Stripe"],
    link: "https://github.com/PKFireBarry/PrompterWave1.1",
    image: "https://i.ibb.co/8zH7RXD/Screenshot-from-2024-01-28-22-36-02.png",
    website: "https://prompter-wave.vercel.app/",
  },
  {
    title: "Blithe Computer Repair",
    description:
      "The website seamlessly integrates industry-leading technologies, ReactJS for dynamic and interactive user interfaces, NextJS for server-side rendering and enhanced performance.",
    tags: [ "Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/PKFireBarry/repair-landing-page",
    image: 'https://i.ibb.co/nRfFFcn/Screenshot-from-2024-01-28-22-36-09.png',
    website: "https://repair-landing-page.vercel.app/",
  },
  {
    title: "AI Cover Letter Writer",
    description:
      "An AI Cover Letter Writer, the ultimate solution for job seekers looking to land their dream job. It uses cutting-edge AI to generate personalized cover letters that match the job requirements.",
    tags: [ "Next.js", "OpenAI", "Firebase", "Tailwind"],
    link: "https://github.com/PKFireBarry/AI-Cover-Letter-Writer",
    image: "https://i.ibb.co/mcfHytm/Screenshot-from-2023-04-10-02-00-14.png",
    website: "https://ai-cover-letter-writer.vercel.app/",
  },
  {
    title: "swakabilly-chat",
    description:
      "This is a real-time chat app that utilizes Firebase as its platform. Users can log in to the app to gain authorization to chat, create or join chat rooms, and send messages to all participants in the chat.",
    tags: ["React", "Tailwind", "Framer", "Firebase", "Toastify"],
    link: "https://github.com/PKFireBarry/swakabilly-chat",
    image: "https://i.ibb.co/zXXXMWF/Screenshot-from-2023-03-09-09-21-16.png",
    website: "https://swakabilly-chat.vercel.app/",
  },
  {
    title: "A Really Cool Blog App",
    description:
      "This blog site was built using Next.js 13 and offers a modern and cutting-edge experience. The build showcases the use of dynamic and static data handling, preview mode with Sanity.io, and a fully responsive design.",
    tags: [ "Nextjs", "Typescript", "TailwindCSS", "SanityV3"],
    link: "https://github.com/PKFireBarry/nextjs-blog",
    image: "https://i.ibb.co/2hvRDGV/Screen-Shot-2023-02-07-at-5-48-34-AM.png",
    website: "https://a-really-cool-blog.vercel.app/",
  },
]

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Add direction state

  const goToPreviousProject = () => {
    setDirection(-1); // Set direction to -1 for left/previous
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNextProject = () => {
    setDirection(1); // Set direction to 1 for right/next
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set up swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextProject(),
    onSwipedRight: () => goToPreviousProject(),
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
    trackMouse: false, // Disable mouse tracking (optional, for touch-only)
  });

  return (
    <>
    
    <div className="relative h-full min-w-full md:min-w-[50%] min-h-[695px] pt-24  overflow-hidden bg-[#030303]">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl  text-center text-white">Some Projects</h2>
      <p className=" flex justify-center text-muted-foreground mt-4 mb-12 text-lg sm:text-xl text-gray-300">
        Some drafts of projects I worked on.
      </p>

      {/* Halo Effect Container */}
      <div className="absolute inset-x-0 -top-40 flex justify-center">
        <motion.div
          className="w-full max-w-[800px] h-40 bg-gradient-to-b from-purple-500/50 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={goToPreviousProject}
          className="p-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Previous Project"
        >
          <ChevronLeft size={24} color="white" />
        </button>

        <div className="mx-4 w-full " {...handlers}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProjectIndex}
              custom={direction}
              className='w-full'
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? '100%' : '-100%',
                  opacity: 1,
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                },
                exit: (direction: number) => ({
                  zIndex: 0,
                  x: direction < 0 ? '100%' : '-100%',
                  opacity: 1,
                  display: "none",
                }),
              }}
              transition={{
                x: { type: "spring", stiffness: 250, damping: 25 },
                display: { delay: 0.3 },
              }}
              animate="center"
              initial="enter"
              exit="exit"
            >
              <ProjectCard
                title={projects[currentProjectIndex].title}
                description={projects[currentProjectIndex].description}
                image={projects[currentProjectIndex].image}
                link={projects[currentProjectIndex].link}
                tags={projects[currentProjectIndex].tags}
                website={projects[currentProjectIndex].website}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goToNextProject}
          className="p-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Next Project"
        >
          <ChevronRight size={24} color="white" />
        </button>
      </div>

      <div className='flex justify-center items-center mt-12'>
      
      </div>
    </div>  
 
    </>

  )
}


