

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { BackgroundBeams } from "@/components/background-beams";
import Image from "next/image";


export default function Home() {
  return (
    <>
   <BackgroundBeams/>
   <div>
    <main id="home" className=" transition-all scroll-smooth flex min-h-screen flex-col items-center justify-between bg-[#07141b]">
      
      <Header/>
      <Nav/>
      <Hero/>
      <About/>
      <Timeline/> 
      <Projects/>           
      <Skills/>s
      <Contact/>
~
    </main>
    </div>
    </>
  );
}
