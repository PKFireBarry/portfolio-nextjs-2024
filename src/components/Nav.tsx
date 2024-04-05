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

  

function Nav() {

   const sections = ['home','about','skills','projects','timeline','contact',]

  return (
    
<div className='w-full sticky justify-end top-20 z-40 right-0 p-4 flex  animate-bounce'>
    <Button className=''>

        <Sheet>
  <SheetTrigger>Menu</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><p className=' text-5xl underline'>Menu</p></SheetTitle>
    </SheetHeader>
    <div className='w-full justify-start  flex '>

            <div className="grid gap-2 py-8">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section}`}
                  className="rounded-xl   sm:w-[125px]  py-2  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125  text-sm sm:text-lg"
                >
                  <p className=" font-semibold ">
                    {section}
                  </p>
                </a>
              ))}
            </div>

    </div>
  </SheetContent>
</Sheet>

    </Button>
   
    </div>

 

    
  )
}

export default Nav