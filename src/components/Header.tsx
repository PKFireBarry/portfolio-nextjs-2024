
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import github from '../app/github.svg'
import linkedin from '../app/linkedin.svg'


function Header() {
  return (
    <header className="sticky hover:scale-125 transition-all top-5 h-[33px] w-[95%] flex items-center justify-between max-w-6xl mx-auto z-20 p-5 bg-ghostwhite rounded-full border-4 bg-white border-black">
  <div

    className="flex flex-row items-center "
  >
    {/* icons */}

    <a target="_blank" href="https://drive.google.com/file/d/1q3wYHTx3Mac9t0_cjzqrhAWDg3hyhiG5/view?usp=share_link">
      <DocumentTextIcon className="w-[33px] h-[33px] text-black cursor-pointer animate-pulse hover:text-blue-600 hover:underline hover:animate-bounce" />
    </a>

    <a target="_blank" href='https://www.linkedin.com/in/darion-george/'>
      <Image
          height={33}
          width={33}
          className=" w-[33px] h-[33px] mx-4"
          alt=""
          src={linkedin}
        />      
    </a>

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
  <Link href="#contact">
    <div
      className="flex flex-row items-center text-gray-500 cursor-pointer"
    >
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="black"
        bgColor="transparent"
      />
      <p className="uppercase hidden md:inline-flex text-sm text-black">
        Wanna Contact Me?
      </p>
    </div>
  </Link>
</header>
  )
}

export default Header