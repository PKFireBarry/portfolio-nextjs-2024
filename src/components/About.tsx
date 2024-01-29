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
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Me?</h1>
    <div className="w-full max-w-[600px] px-4 md:px-6 lg:px-8">
      <p className="text-gray-500 tracking-wider md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      Hello! I'm Darion George, a passionate and dedicated developer based in Tampa, FL. With a strong foundation in Javascript and Web development, I bring creativity and technical expertise to every project I undertake. I specialize in a variety of languages and frameworks, including HTML5, CSS, TypeScript/Javascript, Python, SQL, and GraphQL. My toolkit also includes React.JS, Next.JS, Node.JS, Tailwind CSS, Material-UI, jQuery, Framer-Motion, Jest, Django, Flask, PostgreSQL, Firebase, and Sanity.io.
      </p>
      
    </div>
    <Button><a href='/#projects'>Projects</a></Button>
  </main>
  )
}

export default About