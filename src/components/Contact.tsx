import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Image from 'next/image'
import DocumentTextIcon from '@heroicons/react/24/solid/DocumentTextIcon'
import github from '../app/github.svg'
import linkedin from '../app/linkedin.svg'



function Contact() {
  return (
    <div id='contact' className='flex justify-center items-center  z-20 my-4 w-[60%] flex-col min-h-screen min-w-[400px] bg-[#000000] text-[#e3fbf9] mt-8 rounded-3xl'>
        <div className="space-y-2">

        <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mt-8">Contact</h1>
        
        <p className=" text-md font-light  flex justify-center items-center  dark:text-gray-400">
  Have some big idea or brand to develop and need help? Then reach out, we&apos;d love to hear about your project and provide help.
</p>
      
      </header>

      <div className="py-4 text-sm mx-8 rounded-3xl flex flex-col justify-center text-center items-center bg-[#031111] ">
          <p>
            <span className="font-semibold">Email:</span> barry0719@gmail.com
          </p>
          <p className="mt-2">
            <span className="font-semibold">Phone:</span> (813)-995-7019
          </p>
          <div className='flex my-4'>



          <a target="_blank" href="https://drive.google.com/file/d/1q3wYHTx3Mac9t0_cjzqrhAWDg3hyhiG5/view?usp=share_link">
  <DocumentTextIcon className="w-[33px] h-[33px] cursor-pointer animate-pulse hover:text-blue-600 hover:underline" />
</a>

<a target="_blank" href="https://www.linkedin.com/in/darion-george/">
  <Image
    height={33}
    width={33}
    className=" w-[33px] h-[33px] mx-4"
    alt=""
    src={linkedin}
  />
</a>

<a target="_blank" href="https://github.com/PKFireBarry">
  <Image
    height={33}
    width={33}
    className=" w-[33px] h-[33px]"
    alt=""
    src={github}
  />
</a>

          </div>
        </div>



    <div className="m-8 flex rounded-3xl text-center justify-center items-center bg-[#031111] shadow-md">
<form className="space-y-4 py-4">
    <div className="grid grid-cols-2  gap-4">
      <div className="space-y-2">
        <Label htmlFor="first-name">First name</Label>
        <Input id="first-name" required className='bg-white' placeholder="Enter your first name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last-name">Last name</Label>
        <Input id="last-name" className='bg-white' placeholder="Enter your last name" />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" required className='bg-white' placeholder="Enter your email" type="email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="subject">Subject</Label>
      <Input id="subject" className='bg-white' placeholder="Enter your subject" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea required className="min-h-[100px] bg-white" id="message" placeholder="Enter your message" />
    </div>
    <Button>Send message</Button>
  </form>        
    </div>

  </div>
  
  </div>
  )
}

export default Contact