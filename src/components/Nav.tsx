import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button'
import { Label } from './ui/label'
import Link from 'next/link'

function Nav() {

   const sections = ['home','about','services','projects','timeline','contact',]

  return (
    <div className='flex items-center'>
      {/* Mobile Nav (Sheet) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className='md:hidden'>Menu</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle><p className='text-5xl underline'>Menu</p></SheetTitle>
          </SheetHeader>
          <div className='w-full justify-start flex '>
            <div className="grid gap-2 py-8">
              {sections.map((section, index) => (
                <Link
                  key={index}
                  href={`#${section}`}
                  className="rounded-xl   sm:w-[125px]  py-2  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125  text-sm sm:text-lg"
                >
                  <p className="font-semibold ">
                    {section}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Nav (Hidden on small screens) */}
      <div className="hidden md:flex space-x-4">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={`#${section}`}
            className="rounded-xl px-4 py-2 text-sm font-semibold transition duration-300 ease-in-out hover:bg-gray-200"
          >
            {section}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Nav