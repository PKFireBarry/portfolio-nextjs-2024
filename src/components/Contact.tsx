import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import Image from 'next/image';


const title = "I'd love to help"
const description = "I promise to get back to you as soon as possible. If you have any questions or need help, please don't hesitate to reach out."
const subheading = "you finally got to the end! I wonder what you'll do next?"

function Contact() {
  return (

    <>
                <h2 className="text-2xl md:text-7xl font-bold text-white text-center mb-2 md:mb-4">
        Contact
      </h2>
      <p className="text-muted-foreground text-center md:text-base mb-6 md:mb-12 text-lg sm:text-xl text-gray-300 ">
        {subheading}
      </p>
    <div className="flex flex-col lg:flex-row text-white items-stretch justify-center w-screen bg-black p-6 lg:p-12 px-12 pb-24 hover:scale-105 transition-all">

      <div className="w-full lg:w-1/2 bg-white  rounded-xl shadow-md p-8 lg:mr-6">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
          <br />
          <h2 className="text-lg font-bold text-gray-800">Contact Information</h2>
        <div className="mt-4 text-sm text-gray-600 space-y-2">
          <p>Email: barry0719@gmail.com</p>
          <p>Phone: (813) 995-7019</p>
        </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Contact;