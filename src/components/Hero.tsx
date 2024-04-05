"use client";


import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { HeroCard } from "./HeroCard";
import {  ReloadIcon, Share1Icon, TransformIcon } from "@radix-ui/react-icons";
import { BookOpenIcon, Square3Stack3DIcon, UserGroupIcon } from "@heroicons/react/24/solid";




type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, Im Darion George a Full Stack Web Developer!/>",
      "<Enthusiastic problem-solver with a knack for troubleshooting and debugging complex issues>",
      "<Hey! Thanks For Checking Out My Portfoilio! />",
      "<Experienced in database design and management using PostgreSQL and NOSQL style databases>",
      "<I Love Building Things With Code>",
      "<Familiar with serverless architecture and deployment using technologies like Vercel and Netlify>",
      "<You can check out my work below/>",
      "With great power comes great electricity bill, just trust me bro...",
      "<Feel free to get in touch/>",
      "<All your base are belong to us/>",
      "<.............................../>",
      "{/*I also write music under the name Deep Voyage*/}",
      "<Thanks for stopping by!/>",
      "<Have a great day!/>",
      "<I'm always learning new things about JavaScript>",
      "<Next.js is my favorite JavaScript framework>",
      "<The benefits of using TypeScript are many>",
      "<Passionate about creating user-friendly and responsive web applications>",
      "<I love attending tech meetups and events to connect with other JavaScript developers>",
      "<I have experience using popular JavaScript libraries like jQuery>",
      "<JavaScript is such a versatile language that can be used for both frontend and backend development>",
    ],
    loop: true,
    delaySpeed: 3500,
  });

  const [letters, setLetters] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const text = " QA_Engineer @ ScaleAI ";
    const letterElements = text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block font-light text-xl "
        style={{ display: "inline-block" }}
        initial={{ y: 0 }}
        animate={{
          y: [0, 2.5, 0], // Define a motion path here, adjust values as needed
          transition: {
            duration: 1,
            repeat: Infinity, // Repeat indefinitely
            delay: index * 0.1 // Adjust delay as needed
          }
          
        }}
      >
        {letter}
      </motion.span>
    ));
    setLetters(letterElements);
  }, []);

  return (
    <>
    
  <motion.div
  initial={{ opacity: 0, y: -500 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75 }}
  className="flex z-20 my-4 w-[60%] text-[#e3fbf9] flex-col min-h-screen min-w-[400px] items-center justify-center space-y-6 py-12 md:py-24 lg:py-32 rounded-3xl bg-[#000000]"
  >

  <div className=" flex flex-col  md:flex-row text-start gap-8">

    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center lg:text-6xl underline text-[#e3fbf9]">Darion George</h1>
    <p className="pt-4 px-2 bg-[#371693] rounded-3xl inline-block outline"> 
      {letters}
    </p>
  </div>

  <div>
    <p className="font-bold flex-grow-0 flex px-8 text-base md:text-lg lg:text-xl hover:scale-125 transition-all">
      {text}
      <Cursor cursorColor="black" />
    </p>
  </div>

  <div className="flex gap-2 justify-evenly flex-row">
    <motion.div drag dragConstraints={{ top: -0, left: -0, right: 0, bottom: 0 }}>
      <HeroCard />
    </motion.div>
    <div className="hidden md:block my-20 bg-[#031111]  relative text-center items-center group/card border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
      <div>
        <h1 className="text-xl font-bold">The Results</h1>
        <p className="text-md">How ive been helping people</p>       
      </div>

      <ul className="flex flex-col h-full justify-evenly">
        <div className="flex flex-row justify-around items-center ">
        <p className="text-4xl text-center justify-center font-bold">3+</p>
        <li className="text-md underline font-light"> Clients & Partners</li> 
        <UserGroupIcon className="w-8 h-8 text-[#371693]"/>                        
        </div>

        <div className="flex flex-row justify-around items-center ">
        <p className="text-4xl text-center justify-center font-bold">22</p>
        <li className="text-md underline font-light">Projects Completed</li> 
        <Square3Stack3DIcon className="w-8 h-8 text-[#371693]"/>                 
        </div>

        <div className="flex flex-row justify-around items-center">
        <p className="text-4xl text-center justify-center font-bold">5+</p>
        <li className="text-md underline font-light">Certifications Taken</li>   
        <BookOpenIcon className="w-8 h-8 text-[#371693]"/>             
        </div>
      </ul>
    </div>
  </div>  


  <div className="bg-[#031111] rounded-lg p-6 mx-14">
  <h1 className="text-3xl font-bold mb-4">Services</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-blue-400 to-purple-500">
        <Share1Icon className="text-[#a931e0]"/>
        <h2 className="text-xl font-semibold mb-2">UX/UI Design</h2>
        <p className="text-[#e3fbf9]">Crafting user experiences that delight and engage.</p>
    </div>
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-green-400 to-blue-500">
        <TransformIcon className="text-[#a931e0]"/>
        <h2 className="text-xl font-semibold mb-2">Application Development</h2>
        <p className="text-[#e3fbf9]">Building robust and scalable web applications.</p>
    </div>
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-yellow-400 to-red-500">
        <ReloadIcon className="text-[#a931e0]"/>
        <h2 className="text-xl font-semibold mb-2">Hardware Management</h2>
        <p className="text-[#e3fbf9]">Efficiently managing your hardware infrastructure.</p>        
      </div>
    </div>
  </div>




</motion.div>
</>
    
  );
}

export default Hero;
