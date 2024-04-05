import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { PinContainer } from "./3d-pin";

function Skills() {
  const skills = [
    {
      Item: "VSCode",
      Description: "A powerful code editor",
      Icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    },
    {
      Item: "Git",
      Description: "A distributed version control system",
      Icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
    {
      Item: "HTML",
      Description: "The standard markup language for web pages",
      Icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    {
      Item: "CSS",
      Description:
        "A stylesheet language used to describe the presentation of a document written in HTML",
      Icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      Item: "JS",
      Description:
        "A high-level programming language used to create interactive websites",
      Icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      Item: "Python",
      Description:
        "A popular programming language used for web development, data analysis, and artificial intelligence",
      Icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      Item: "NodeJS",
      Description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine",
      Icon: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    },
    {
      Item: "PostgreSQL",
      Description: "A powerful, open source object-relational database system",
      Icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
      Item: "Firebase",
      Description: "A mobile and web application development platform",
      Icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
    {
      Item: "React",
      Description: "A JavaScript library for building user interfaces",
      Icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      Item: "NextJS",
      Description:
        "A framework for building server-side rendered React applications",
      Icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      Item: "Tailwind",
      Description:
        "A utility-first CSS framework for rapidly building custom designs",
      Icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      Item: "Bootstrap",
      Description:
        "A popular CSS framework for building responsive, mobile-first websites",
      Icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
    },
    {
      Item: "Framer Motion",
      Description: "A production-ready motion library for React",
      Icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    {
      Item: "Material-Ui",
      Description:
        "A popular React UI framework based on Google's Material Design",
      Icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    },
    {
      Item: "JQuery",
      Description: "A fast, small, and feature-rich JavaScript library",
      Icon: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg",
    },
    {
      Item: "Flask",
      Description: "A microframework for Python",
      Icon: "https://cdn.worldvectorlogo.com/logos/flask.svg",
    },
    {
      Item: "Prisma",
      Description: "A database toolkit for ORM",
      Icon: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    },
    {
      Item: "Azure",
      Description: "A cloud computing platform",
      Icon: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
    },
    {
      Item: "NPM",
      Description: "A package manager for the JavaScript programming language",
      Icon: "https://cdn.worldvectorlogo.com/logos/npm-2.svg",
    },
    {
      Item: "Figma",
      Description: "Web application for interface design",
      Icon: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
    },
    {
      Item: "Jest",
      Description: "A testing library for javascript",
      Icon: "https://cdn.worldvectorlogo.com/logos/jest-2.svg",
    },
    {
      Item: "Vercel",
      Description: "An open-source web hosting platform that offers serverless functions",
      Icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg"
    },
    {
      Item: "Selenium",
      Description: "An open source framework for automating web applications for testing purposes.",
      Icon: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg"
    }
  ];

  function getRandomNumber() {
    return Math.random() * 2.5;
  }

  function getRandomXY() {
    return {
      x: Math.random() * 75,
      y: Math.random() * -100,
    };
  }

  return (
    <section
      id="skills"
      className="hidden md:block flex flex-col z-20 my-4 w-[60%] min-h-screen min-w-[400px] py-12  mt-8 rounded-3xl bg-[#000000] text-[#e3fbf9] "
    >
      <header className="mb-10 text-center">
        <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl underline">
          Tools of the trade
        </h1>
        <p className=" m-4">
          Some skills used in my projects
        </p>
      </header>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex  scale-75 flex-col items-center text-center hover:scale-100 rounded-xl outline bg-[#371693] transition-all">

                        <PinContainer
                        className="text-black bg-gray-400"
              title={skill.Description}
              href={skill.Icon}     >
      <div className="relative w-32 h-32 ">
        <Image
          alt={skill.Item}
          className="rounded-full object-cover w-16 h-16"
          src={skill.Icon}
          layout="fill"
        />
      </div>
      <h2 className="text-xl font-semibold">{skill.Item}</h2>
      </PinContainer>

  
</div>

        ))}
      </div>
    </section>
  );
}

export default Skills;
