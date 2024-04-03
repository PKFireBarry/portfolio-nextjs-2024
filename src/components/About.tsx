import React from 'react'
import rock from '../app/rock.jpg'
import Image from 'next/image'

import { DirectionAwareHover } from './direction-aware-hover'
import { TextGenerateEffect } from './text-generate-effect'
import { Button } from "./moving-border";

const words = `Hello! I'm Darion George, a developer based in Tampa, FL. I have a strong foundation in Javascript and Web development, I want to bring creativity and technical expertise to every project I undertake. I specialize in a variety of languages and frameworks, including TypeScript/Javascript, Python, SQL, and GraphQL. My toolkit also includes React.JS, Next.JS, Node.JS, Tailwind CSS, Framer-Motion, Jest, Django, Flask, PostgreSQL, Firebase, and Sanity.io with new skills constantly on the horizon. Here I want try to showcase a variety of full-stack projects, including PrompterWave, A Really Cool Blog, and Cover Letter Writer.
`;


function About() {
  return (
    <main id='about' className="flex z-20 my-4 w-[60%] flex-col min-h-screen min-w-[400px] items-center justify-center space-y-2 py-12 md:py-24 lg:py-32 bg-white  rounded-3xl">
      <div className='mb-8 flex w-full items-center justify-center'>
                  <DirectionAwareHover imageUrl={rock as unknown as string}>
    <h1 className="text-3xl animate-pulse font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Me?</h1>
    <p className='hidden sm:block'>Creator | Developer | Hardware Enthusiast</p>
      </DirectionAwareHover>
      </div>



      
    <div className="w-full hover:scale-90 outline transition-all m-4 border bg-gradient-to-r from-gray-400 via-blue-500 to-teal-500 rounded-xl py-4  max-w-[600px] px-4 md:px-6 lg:px-8">

<TextGenerateEffect words={words} className='md:text-base sm:text-sm ' />
      
    </div>
    <Button className=' transition-all'>
  <a href="/#projects" >Projects</a>
</Button>
  </main>
  )
}

export default About