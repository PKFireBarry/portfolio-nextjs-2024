import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import TechStack from "@/components/tech-stack";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>

   <div>
    <main id="home" className=" transition-all scroll-smooth flex min-h-screen flex-col items-center justify-between bg-black">
      
      <Header/>
      <Hero/>

      <About/>
      <Experience/>
      <Projects/>
      <TechStack/>
 
      <Contact/>
    </main>
    </div>
    </>
  );
}
