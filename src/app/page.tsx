

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ParticleBackGround from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Image from "next/image";


export default function Home() {
  return (
    <>
   
    <main id="home" className=" transition-all scroll-smooth flex min-h-screen flex-col items-center justify-between bg-[#07141b]">
      <Header/>
      <Nav/>
      <Hero/>
      <About/>
      <Timeline/>      
      <Skills/>
      <Projects/>

      <Contact/>

    </main>
    </>
  );
}
