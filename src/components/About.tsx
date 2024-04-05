import React from 'react'
import rock from '../app/rock.jpg'
import { DirectionAwareHover } from './direction-aware-hover'
import { TextGenerateEffect } from './text-generate-effect'
import { BookmarkFilledIcon, CheckCircledIcon, GearIcon, StackIcon} from '@radix-ui/react-icons';
import Image from 'next/image';
import linkedin from '../app/linkedin.svg'
import github from '../app/github.svg'
import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';


const words = `Hi, im an Experienced IT professional with a proven track record of success in developing and implementing technology solutions to improve efficiency, security, and the user experience. Expertise in a wide range of technologies, including Python, Javascript, CSS, and both SQL and NoSQL database styles. I'm Passionate about leveraging new technology to drive innovation and solve real-world problems.
`;


function About() {
  return (
    <main id='about' className="flex flex-col z-20 my-4 w-[60%] min-h-screen min-w-[400px] items-center justify-around space-y-2 py-12 md:py-24 lg:py-32 text-[#e3fbf9] bg-[#000000]  rounded-3xl">
      <h1 className="text-3xl mb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl underline text-[#e3fbf9]">About Me</h1>

      <div className=" flex gap-3 mx-8 rounded-lg shadow-md p-6 bg-[#031111]">
        <h1 className="text-3xl flex item-center justify-center font-semibold text-[#e3fbf9] px-4 pt-8">Latest Roles</h1>
        
        <div className="items-center grid grid-cols-1 xl:grid-cols-3 gap-4">

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#e3fbf9] mb-2">Qrowdsy</h2>
            <p className="text-gray-300">Contributor</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-bold text-[#e3fbf9] mb-2">Scale AI</h2>
            <p className="text-gray-300">ML Quality Assurance</p>
          </div>
                    
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg text-start font-bold text-[#e3fbf9] mb-2">Extant3D</h2>
            <p className="text-gray-300">Hardware Management</p>
          </div>

        </div>

      </div>


      <div className='flex flex-row gap-8 m-8'>

        <div className=' flex w-full items-center justify-center hidden md:block'>
          <DirectionAwareHover imageUrl={rock as unknown as string}>
            <h1 className="text-3xl animate-pulse font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Me?</h1>
            <p className='hidden sm:block'>Creator | Developer | Hardware Enthusiast</p>
          </DirectionAwareHover>
        </div>

        <div className="transition-all rounded-xl text-[#85ecdf] bg-[#031111]">
            <div className='flex justify-center items-center pt-4'>
              <CheckCircledIcon/>
              <p className='px-2 font-bold'>Open To Work</p>
            </div>
          <TextGenerateEffect words={words} className='md:text-base  sm:text-sm '/>
        </div>  

      </div>



      <div className='flex flex-col justify-center items-center  rounded-xl p-8'>
        <div className='flex flex-row justify-evenly font-light text-lg gap-16'>

        <a target="_blank" href='https://www.linkedin.com/in/darion-george/'>
          <Image
              height={33}
              width={33}
              className=" w-[31px] h-[31px]"
              alt=""
              src={linkedin}
            />      
        </a>

          <HoverCard>
            <HoverCardTrigger>
              <Button className='w-[33px] h-[33px]'>
                <a href='/#projects'>
                  <StackIcon/>
                </a>
              </Button>              
            </HoverCardTrigger>
            <HoverCardContent><p className='flex items-center text-center justify-center font-semibold'>My Projects</p></HoverCardContent>
          </HoverCard>
          
        <a target="_blank" href='https://github.com/PKFireBarry'>
          <Image
              height={33}
              width={33}
              className=" w-[33px] h-[33px]"
              alt=""
              src={github}
            />      
        </a>
          
        </div>

        <div className='underline pt-4 font-semibold'>
          <a href="https://drive.google.com/file/d/1q3wYHTx3Mac9t0_cjzqrhAWDg3hyhiG5/view?usp=share_link">Download CV</a>
        </div>        
      </div>

  </main>
  

  )
}

export default About