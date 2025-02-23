import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon, HomeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import github from '../app/github.svg'
import linkedin from '../app/linkedin.svg'
import Nav from './Nav';


function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:justify-between">
        <div className="flex flex-row items-center">
          {/* Back to Top Link */}
          <Link href="#home">
            <HomeIcon className="h-8 w-8 cursor-pointer text-black hover:text-blue-600" />
          </Link>

          <a target="_blank" href="https://flowcv.com/resume/us9nujrp4p">
            <DocumentTextIcon className="mx-4 h-8 w-8 cursor-pointer text-black hover:text-blue-600" />
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/darion-george/'>
            <Image
              height={33}
              width={33}
              className="mx-4 h-8 w-8"
              alt=""
              src={linkedin}
            />
          </a>
          <a target="_blank" href='https://github.com/PKFireBarry'>
            <Image
              height={33}
              width={33}
              className="h-8 w-8"
              alt=""
              src={github}
            />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="#contact">
            <div className="flex cursor-pointer items-center text-gray-500">
              <SocialIcon
                className="cursor-pointer"
                network="email"
                style={{ height: 40, width: 40 }}
                fgColor="black"
                bgColor="transparent"
              />
              <p className="hidden text-sm uppercase text-black md:inline-flex">
                Wanna Contact Me?
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header