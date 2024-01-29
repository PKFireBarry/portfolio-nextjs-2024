'use client'

import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import desert from '../app/desert .jpg'
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


type Props = {}

function Hero({}: Props) {


  const [text, count] = useTypewriter({
    words: [
        '<Hi, Im Darion George a Full Stack Developer!/>', 
        '<Enthusiastic problem-solver with a knack for troubleshooting and debugging complex issues>',
        '<Hey! Thanks For Checking Out My Portfoilio! />',
        '<Experienced in database design and management using PostgreSQL and NOSQL style databases>',
        '<I Love Building Things With Code>',
        '<Familiar with serverless architecture and deployment using technologies like Vercel and Netlify>',
        '<You can check out my work below/>',
        'With great power comes great electricity bill, just trust me bro...',
        '<Feel free to get in touch/>',
        '<Adept at designing and implementing RESTful APIs for seamless communication between frontend and backend>',
        '<All your base are belong to us/>',
        '<.............................../>',
        '{/*I also write music under the name Deep Voyage*/}',
        '<Thanks for stopping by!/>',
        '<Have a great day!/>',
        '<I\'m always learning new things about JavaScript>',
        '<Next.js is my favorite JavaScript framework>',
        '<The benefits of using TypeScript are many>',
        '<Passionate about creating user-friendly and responsive web applications>',
        '<I love attending tech meetups and events to connect with other JavaScript developers>',
        '<I have experience using popular JavaScript libraries like jQuery>',
        '<JavaScript is such a versatile language that can be used for both frontend and backend development>'
    ],
    loop: true,
    delaySpeed: 3500,
});



  return (
    <motion.div     
    initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5 }}
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }} className="flex my-4 w-[60%] flex-col min-h-screen items-center justify-center space-y-6 py-12 md:py-24 lg:py-32 rounded-3xl bg-slate-50">
      
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 mb-8 ">




              <HoverCard>
  <HoverCardTrigger>              <h1 className="text-3xl underline font-bold tracking-widest sm:text-4xl md:text-5xl mb-4 lg:text-6xl/none">
                Darion George
              </h1></HoverCardTrigger>
  <HoverCardContent>
    <p className='font-bold'>Whoa</p> you hovered over my name? Well, I personally Just wanted to say thank you for checking my website out!
  </HoverCardContent>
</HoverCard>

              <Button className="text-lg tracking-widest font-medium text-white dark:text-gray-400">Full Stack Developer</Button>
            </div>
            <Image
              alt="Hero"
              className="rounded-full mx-auto transform w-[300px] h-[300px] sm:w-[374px] sm:h-[374px] my-4 object-cover hover:scale-125 transition-all"
              src={desert}
            />
            <div

            className='z-20'>
                <div className='mt-8'>
                    <h1 className=''>
                        <Button className='px-8 text-lg md:text-xl lg:text-2xl hover:scale-125 transition-all'>{text}</Button>
                        <Cursor cursorColor='black' />
                    </h1>        
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  </motion.div>
  )
}

export default Hero