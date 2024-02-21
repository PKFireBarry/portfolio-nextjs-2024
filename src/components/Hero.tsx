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

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, Im Darion George a Full Stack Developer!/>",
      "<Enthusiastic problem-solver with a knack for troubleshooting and debugging complex issues>",
      "<Hey! Thanks For Checking Out My Portfoilio! />",
      "<Experienced in database design and management using PostgreSQL and NOSQL style databases>",
      "<I Love Building Things With Code>",
      "<Familiar with serverless architecture and deployment using technologies like Vercel and Netlify>",
      "<You can check out my work below/>",
      "With great power comes great electricity bill, just trust me bro...",
      "<Feel free to get in touch/>",
      "<Adept at designing and implementing RESTful APIs for seamless communication between frontend and backend>",
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
    const text = "| Machine Learning QA Engineer @ ScaleAI |";
    const letterElements = text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block font-semibold text-xl"
        style={{ display: "inline-block" }}
        initial={{ y: 0 }}
        animate={{
          y: [0, -2.5, 0], // Define a motion path here, adjust values as needed
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
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}

      className="flex my-4 w-[60%] flex-col min-h-screen items-center justify-center space-y-6 py-12 md:py-24 lg:py-32 rounded-3xl bg-slate-50"
    >
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex z-0 flex-col items-center space-y-4 text-center">
              <motion.div
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .85 }}
                    
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                className="space-y-2 mb-12 outline rounded-xl p-4 bg-[#0d5d8c]"
              >
                <h1
                  className="text-3xl underline font-bold tracking-widest sm:text-4xl md:text-5xl mb-4 lg:text-6xl
  "
                >
                  <span className="inline-block transition-transform hover:scale-125">
                    D
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    a
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    r
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    i
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    o
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    n
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    {" "}
                  </span>
                  <span className="inline-block transition-transform hover:scale-125">
                    G
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    e
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    o
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    r
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    g
                  </span>
                  <span className="inline-block transition-transform hover:scale-110">
                    e
                  </span>
                </h1>

                <p
                  className="m-4 
                     
                    "
                >
                  {letters}
                </p>
              </motion.div>

              <HoverCard>
                <HoverCardTrigger>

                  <motion.div
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .85, delay: .75 }}
                  drag
                  dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                  }}
                  

                  >
                  <Image
                    alt="Hero"
                    className="rounded-full outline delay-200 mx-auto transform w-[300px] h-[300px] sm:w-[374px] sm:h-[374px] my-4 object-cover "
                    src={desert}
                  />                    
                  </motion.div>

                </HoverCardTrigger>
                <HoverCardContent className="outline">
                  <p className="font-bold">Whoa</p> you hovered over me? Well, I
                  personally Just wanted to say thank you for checking my
                  website out!
                </HoverCardContent>
              </HoverCard>
              <div className="z-20">
                <motion.div className="mt-8"
                  initial={{ opacity: 0, y: 1000 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .85, delay:1 }}
                  drag
                  dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                  }}
                  
                >
                  <h1 className="">
                    <Button className="  hover:outline shadow-2xl px-8 text-lg md:text-xl lg:text-2xl hover:scale-125 transition-all bg-[#0d5d8c] outline text-black">
                      {text}
                      <Cursor cursorColor="black" />
                    </Button>
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Hero;
