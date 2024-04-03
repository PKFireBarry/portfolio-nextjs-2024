"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import desert from "../app/desert .jpg";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { HeroCard } from "./HeroCard";
import { BackgroundBeams } from "./background-beams";
import { CircleBackslashIcon, HomeIcon, ReloadIcon, Share1Icon, SquareIcon, TransformIcon, TriangleDownIcon } from "@radix-ui/react-icons";




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
        className="inline-block font-light text-3xl "
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
  className="flex z-20 my-4 w-[60%] flex-col min-h-screen min-w-[400px] items-center justify-center space-y-6 py-12 md:py-24 lg:py-32 rounded-3xl bg-stone-50"
>
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest mb-4">
      <span className="inline-block transition-transform hover:scale-125">D</span>
      <span className="inline-block transition-transform hover:scale-110">a</span>
      <span className="inline-block transition-transform hover:scale-110">r</span>
      <span className="inline-block transition-transform hover:scale-110">i</span>
      <span className="inline-block transition-transform hover:scale-110">o</span>
      <span className="inline-block transition-transform hover:scale-110">n</span>
      <span className="inline-block transition-transform hover:scale-125"> G</span>
      <span className="inline-block transition-transform hover:scale-110">e</span>
      <span className="inline-block transition-transform hover:scale-110">o</span>
      <span className="inline-block transition-transform hover:scale-110">r</span>
      <span className="inline-block transition-transform hover:scale-110">g</span>
      <span className="inline-block transition-transform hover:scale-110">e</span>
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl p-2 bg-stone-200 rounded-3xl inline-block outline">
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

  {/*
    <div className="hidden md:block my-20 bg-gradient-to-r from-gray-400 via-blue-500 to-teal-500 text-black relative text-center items-center group/card border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
      <h1>How ive helped partners get ahead</h1>
      
      a blob about webiste testing for clients at scale AI
      a blob about build websites for clients a freelance dev
      
    </div>

  */}

  </div>  
  <div className="bg-gray-100 rounded-lg p-6 mx-4">
  <h1 className="text-3xl font-bold mb-4">Services</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-blue-400 to-purple-500">
        <Share1Icon/>
        <h2 className="text-xl font-semibold mb-2">UX/UI Design</h2>
        <p className="text-gray-700">Crafting user experiences that delight and engage.</p>
      

    </div>
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-green-400 to-blue-500">
        <TransformIcon/>
        <h2 className="text-xl font-semibold mb-2">Application Development</h2>
        <p className="text-gray-700">Building robust and scalable web applications.</p>


    </div>
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between bg-gradient-to-r from-yellow-400 to-red-500">
        <ReloadIcon/>
        <h2 className="text-xl font-semibold mb-2">Hardware Management</h2>
        <p className="text-gray-700">Efficiently managing your hardware infrastructure.</p>        
      </div>
    </div>
  </div>




</motion.div>
</>
    
  );
}

export default Hero;
