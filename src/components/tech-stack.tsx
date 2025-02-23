"use client";

import { Card } from "@/components/ui/card"
import {motion } from "framer-motion"
import Image from "next/image"

const techSkills = [
  {
    category: "Frontend",
    description: "For the great UIs and animations",
    skills: [
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
      { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
      { name: "Svelte", icon: "https://cdn.worldvectorlogo.com/logos/svelte-1.svg" },
      { name: "Framer", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "Material-UI", icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    ],
  },
  {
    category: "Backend",
    description: "For APIs and presistent data",
    skills: [
      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" },
      { name: "Express", icon: "https://cdn.worldvectorlogo.com/logos/express.svg" },
      { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
      { name: "Django", icon: "https://cdn.worldvectorlogo.com/logos/django.svg" },
      { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "Prisma", icon: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg" },
      { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
      { name: "Flask", icon: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
    ],
  },
  {
    category: "DevOps",
    description: "For better deployment and management",
    skills: [
      { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws.svg" },
      { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github.svg" },
      { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
      { name: "Jest", icon: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
      { name: "Azure", icon: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
      { name: "Google Cloud", icon: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
      { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "Red Hat Linux", icon: "https://cdn.worldvectorlogo.com/logos/red-hat-1.svg" },
    ],
  },
  {
    category: "Tools/Automation",
    description: "To make my life easier",
    skills: [
      { name: "VS Code", icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Postman", icon: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
      { name: "N8N", icon: "https://cdn.worldvectorlogo.com/logos/n8n-1.svg" },
      { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm-2.svg" },
      { name: "Selenium", icon: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" },
      { name: "Google Drive", icon: "https://cdn.worldvectorlogo.com/logos/google-drive-1.svg" },
      { name: "Google Sheets", icon: "https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg" },
      { name: "Google Docs", icon: "https://cdn.worldvectorlogo.com/logos/google-docs-icon-2.svg" },
      { name: "LLMs", icon: "https://cdn.worldvectorlogo.com/logos/openai.svg" },
      { name: "Airtable", icon: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },

    ],
  },
];

const TechStack = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16  min-h-full bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
            Tools Of The Trade
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            Some of the technologies and tools I work with regularly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-6">
          {techSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/10 text-white backdrop-blur-lg bg-opacity-95 rounded-xl shadow-xl p-6 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold  mb-2">
                  {category.category}
                </h3>
                <p className="text-sm ">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg border border-gray-200  transition-all duration-300"
                  >
                    {skill.icon && (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="w-7 h-7 md:w-6 md:h-6 object-contain bg-white rounded-md"
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget instanceof HTMLImageElement) {
                            e.currentTarget.src = '/placeholder.svg'; // Replace with your placeholder
                            e.currentTarget.onerror = null; // Prevent infinite loop
                          }
                        }}
                      />
                    )}
                    <span className="text-sm font-medium ">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;