import React from 'react'
import rock from '../app/rock.jpg'
import Image from 'next/image'
import { Button } from './ui/button'


function About() {
  return (
    <main id='about' className="flex w-[60%] flex-col min-h-screen items-center justify-center space-y-6 py-12 md:py-24 lg:py-32 bg-white mt-8 rounded-3xl">
    <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
      <Image
        alt="Profile picture"
        className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow-lg"
        src={rock}
      />
    </div>
    <h1 className="text-3xl animate-pulse font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Me?</h1>
    <p className='hidden sm:block'>Creator | Developer | Hardware Enthusiast</p>
    <div className="w-full max-w-[600px] px-4 md:px-6 lg:px-8">
    <p className="text-gray-500  tracking-wider md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
  Hello! I&apos;m Darion George, a developer based in Tampa, FL. I have a strong foundation in Javascript and Web development, I want to bring creativity and technical expertise to every project I undertake. I specialize in a variety of languages and frameworks, including TypeScript/Javascript, Python, SQL, and GraphQL. My toolkit also includes React.JS, Next.JS, Node.JS, Tailwind CSS, Framer-Motion, Jest, Django, Flask, PostgreSQL, Firebase, and Sanity.io with new skills constantly on the horizon. Here I want try to showcase a variety of full-stack projects, including PrompterWave, A Really Cool Blog, and Cover Letter Writer.
</p>

      
    </div>
    <Button className='hover:scale-125 transition-all'>
  <a href="/#projects" >Projects</a>
</Button>
  </main>
  )
}

export default About