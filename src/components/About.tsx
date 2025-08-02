"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, MapPin, Download } from "lucide-react"
import rock from "../app/rock.jpg"

function About() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative w-72 h-72 lg:w-full lg:h-80 rounded-lg overflow-hidden">
              <Image
                src={rock || "/placeholder.svg"}
                alt="Darion George"
                fill
                className="object-cover"
                onError={(e) => {
                  if (e.currentTarget instanceof HTMLImageElement) {
                    e.currentTarget.src = '/placeholder.svg';
                    e.currentTarget.onerror = null;
                  }
                }}
              />
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Central Florida</span>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/darion-george/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Linkedin size={20} className="text-gray-300" />
                </a>
                <a
                  href="https://github.com/PKFireBarry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Github size={20} className="text-gray-300" />
                </a>
              </div>

              <a
                href="https://flowcv.com/resume/us9nujrp4p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Hi, I'm Darion George
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  A software developer specializing in full-stack web applications and data-driven solutions. 
                  I've built sophisticated marketplaces, AI-powered platforms, and automation systems for clients 
                  ranging from startups to enterprise companies like OpenAI, Nvidia, and General Motors.
                </p>
                <p>
                  With experience at Scale AI training large-scale AI models and Apple providing security expertise, 
                  I bring both technical depth and real-world problem-solving skills. I've successfully built and 
                  operated a $100K+ computer hardware business while developing data pipelines that processed 
                  11,000+ business leads for B2B clients.
                </p>
                <p>
                  I work primarily with TypeScript and Python on the backend, building React and Next.js applications 
                  on the frontend. This combination lets me create complete solutions from database design to user 
                  interface, with AI integrations and automation workflows that actually solve business problems.
                </p>
                <p>
                  When I'm not coding, I enjoy traveling to places like Colorado, California and the greater D.C. area for hiking and spending time 
                  with my family here in Florida.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-zinc-800 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-gray-400 text-sm">
                Open to new opportunities and collaborations
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

