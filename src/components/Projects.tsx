import React from 'react'
import Image from 'next/image'
import ProjectCard from './project-card';
import github from '../app/github.svg'




const projects = [
  {
    title: "Borkin Industries",
    description:
      "A client needed a website to showcase their services, so I built a responsive and mobile-friendly site using Next.js and Tailwind CSS. The design featured a clean, modern layout with a simple yet effective contact form. Hosted on Vercel, the website delivered a seamless user experience and successfully met the client’s needs.",
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
    image: 'https://i.ibb.co/nRfFFcn/Screenshot-from-2024-01-28-22-36-09.png"',
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
  return (
    <>
    
    <div className="relative min-h-screen w-full pt-24  overflow-hidden bg-[#030303]">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl  text-center text-white">Some Projects</h2>
      <p className=" flex justify-center text-muted-foreground mt-4 mb-12 text-lg sm:text-xl text-gray-300">
        Some drafts of projects I worked on.
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


