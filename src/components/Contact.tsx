"use client"

import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card } from "./ui/card";
import Image from 'next/image';
import github from '../app/github.svg'
import linkedin from '../app/linkedin.svg'

const title = "I'd love to help"
const description = "I promise to get back to you as soon as possible. If you have any questions or need help, please don't hesitate to reach out."
const subheading = "you finally got to the end! I wonder what you'll do next?"

function Contact() {

  return (
    <>
      <div className=" px-4 py-16 mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 id='contact' className="text-3xl sm:text-4xl md:text-7xl font-bold text-white text-center mb-2 md:mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground text-center text-lg sm:text-xl mb-6 md:mb-12">
            {subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto "
        >
          <Card className="backdrop-blur-sm shadow-lg bg-white/10 text-white">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-white">
                    {description}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Contact Information</h4>
                  <div className="space-y-3 text-sm">
                    <a
                      href="mailto:barry0719@gmail.com"
                      className="flex text-white items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      barry0719@gmail.com
                    </a>
                    <a
                      href="tel:+18139957019"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2 text-white" />
                      <span className="text-white">
                        (813) 995-7019
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="https://www.linkedin.com/in/darion-george/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent transition-colors"
                    >
                      <Image src={linkedin} width={35} height={35} alt="LinkedIn" />
                    </a>
                    <a
                      href="https://github.com/PKFireBarry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent transition-colors"
                    >
                      <Image src={github} width={35} height={35} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Send a Message</h4>
                <div className="rounded-lg overflow-hidden border bg-background/50">
                  <iframe
                    src="https://dariongeorgen8n.up.railway.app/form/a414d5bb-f367-4eea-947a-5468dd0151f4"
                    className="w-full min-h-[675px] md:min-h-[700px]"
                    title="Contact Form"
                    sandbox="allow-scripts allow-forms allow-same-origin"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;