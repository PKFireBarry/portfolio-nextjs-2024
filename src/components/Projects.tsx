import React from 'react'

import Image from 'next/image'

import { Button } from "./moving-border";


const projects = [
  {
    title:  'swakabilly-chat',
    description: "This is a real-time chat app that utilizes Firebase as its platform. Users can log in to the app to gain authorization to chat, create or join chat rooms, and send messages to all participants in the chat. The app is fully responsive and features great styling. It uses several packages such as framer-motion, react-firebase-hooks, react-toastify, and universal-cookie to provide dynamic UI transitions, integrate Firebase services into React components, and handle browser cookies.",
    stack: "React, Tailwind, Framer, Firebase, Toastify",
    link: "https://github.com/PKFireBarry/swakabilly-chat",
    photo: "https://i.ibb.co/zXXXMWF/Screenshot-from-2023-03-09-09-21-16.png",
    website: "https://swakabilly-chat.vercel.app/"
  },
  {
    title: "A Really Cool Blog App (with CMS Intergration)",
    description: "This blog site was built using Next.js 13 and offers a modern and cutting-edge experience. The build showcases the use of dynamic and static data handling, preview mode with Sanity.io, a fully responsive design using Tailwind CSS, server and client components, the new app folder structure, dynamic page routing, GROQ query language, Sanity studio integration with authentication, TypeScript for error reduction, and deployment on Vercel.",
    link: "https://github.com/PKFireBarry/nextjs-blog",
    stack: "React, Nextjs, Typescript, TailwindCSS, SanityV3",
    photo: "https://i.ibb.co/2hvRDGV/Screen-Shot-2023-02-07-at-5-48-34-AM.png",
    website: "https://a-really-cool-blog.vercel.app/"
  },
  {
    title: 'AI Cover Letter Writer',
    description: 'An AI Cover Letter Writer, the ultimate solution for job seekers looking to land their dream job. It uses cutting-edge AI to generate personalized cover letters that match the job requirements, saving you time and increasing your chances of success. Say goodbye to the stress and frustration of writing cover letters and hello to a streamlined and professional approach. Invest in saving time in your future and try the AI Cover Letter Writer!',
    stack: 'eslint, reactjs, nextjs, particles, openai, firebase-auth, firebase-database, tailwindcss, universal-cookie, framer-motion, react-hot-toast',
    link: 'https://github.com/PKFireBarry/AI-Cover-Letter-Writer',
    photo: 'https://i.ibb.co/mcfHytm/Screenshot-from-2023-04-10-02-00-14.png',
    website: 'https://ai-cover-letter-writer.vercel.app/',
  },
  {
    title: 'Blithe Computer Repair',
    description: 'The website seamlessly integrates industry-leading technologies, including eslint for code quality, ReactJS for dynamic and interactive user interfaces, NextJS for server-side rendering and enhanced performance, Tailwind CSS for streamlined and customizable styling, and Framer Motion for smooth and captivating animations.',
    stack: 'eslint, reactjs, nextjs, tailwindcss, framer-motion',
    link: 'https://github.com/PKFireBarry/repair-landing-page',
    photo: 'https://i.ibb.co/nRfFFcn/Screenshot-from-2024-01-28-22-36-09.png"',
    website: 'https://repair-landing-page.vercel.app/',
  },
  {
    title: 'PrompterWave',
    description: 'The journey of PrompterWave began with a personal struggle, a challenge I faced in achieving good stable diffusion prompts. I found myself lacking the creative spark to generate interesting subjects that aligned seamlessly with my initial concepts. This gap between imagination and execution led me to envision a solution, and thats how PrompterWave came into existence.',
    stack: 'eslint, reactjs, nextjs, openai, firebase-database, tailwindcss, framer-motion, shadcn-ui',
    link: 'https://github.com/PKFireBarry/PrompterWave1.1',
    photo: 'https://i.ibb.co/8zH7RXD/Screenshot-from-2024-01-28-22-36-02.png',
    website: 'https://prompter-wave.vercel.app/',
  }
]

function Projects() {
  return (
    <div id='projects' className="flex z-20 my-4 w-[60%] flex-col min-h-screen min-w-[400px] items-center justify-center bg-[#000000] text-[#e3fbf9] mt-8 rounded-3xl">
    <main className="w-full max-w-3xl p-4">
    <header className="my-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Projects</h1>
        <p className=" dark:text-gray-400 m-4">Sometimes you just have to build it yourself</p>
      </header>
      <div className="grid gap-8">
        
          {projects.slice().reverse().map((project, index) => (
            <div key={index} className="flex outline flex-col items-center bg-[#031111] dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-90 transition-all">
              <Image
                alt={`Project ${index + 1}`}
                className="w-full h-60 object-cover"
                height="300"
                src={project.photo}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <h2 className="text-sm font-bold my-2">Tech: {project.stack}</h2>
                <p className=" dark:text-gray-400">{project.description}</p>
                <div className='flex justify-between my-2'>
                  <Button>
                    <a target="_blank" rel="noopener noreferrer" href={project.link}>View on GitHub</a>
                  </Button>
                  <Button>
                    <a target="_blank" rel="noopener noreferrer" href={project.website}>Check Demo Video</a>
                  </Button>
                  <Button>
                    <a target="_blank" rel="noopener noreferrer" href={project.website}>Visit the Website</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>


  )
}

export default Projects