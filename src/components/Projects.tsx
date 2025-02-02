import React from 'react'
import Image from 'next/image'
import ProjectCard from './project-card';




const projects = [
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
    title: "Blithe Computer Repair",
    description:
      "The website seamlessly integrates industry-leading technologies, including eslint for code quality, ReactJS for dynamic and interactive user interfaces, NextJS for server-side rendering and enhanced performance.",
    tags: [ "Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/PKFireBarry/repair-landing-page",
    image: 'https://i.ibb.co/nRfFFcn/Screenshot-from-2024-01-28-22-36-09.png"',
    website: "https://repair-landing-page.vercel.app/",
  },
  {
    title: "PrompterWave",
    description:
      "PrompterWave began as a solution to achieve better stable diffusion prompts. It bridges the gap between imagination and execution, helping users generate creative and effective prompts.",
    tags: [ "Next.js", "OpenAI", "Firebase", "Tailwind", "Shadcn UI"],
    link: "https://github.com/PKFireBarry/PrompterWave1.1",
    image: "https://i.ibb.co/8zH7RXD/Screenshot-from-2024-01-28-22-36-02.png",
    website: "https://prompter-wave.vercel.app/",
  },
  {
    title: "Boorkin Industries",
    description:
      "",
    tags: [ "Next.js", "OpenAI", "Firebase", "Tailwind", "Shadcn UI"],
    link: "",
    image: "",
    website: "",
  },
  {
    title: "Automation",
    description:
      "",
    tags: [ "Javascript", "Ollama", "Gmail", "Tailwind", "N8N"],
    link: "",
    image: "",
    website: "",
  },
]

export default function Projects() {
  return (
    <>
    
    <div className="relative min-h-screen w-full pt-24  overflow-hidden bg-[#030303]">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl  text-center text-white">Some Projects</h2>
      <p className=" flex justify-center text-muted-foreground mt-4 mb-12 text-lg sm:text-xl text-gray-300">
        Technologies and tools I work 
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mx-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            website={project.website}
          />
        ))}
      </div>
      <div className='flex justify-center items-center mt-12'>
      
      </div>
    </div>  
 
    </>

  )
}


