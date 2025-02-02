import { Card } from "@/components/ui/card"
import {motion } from "framer-motion"

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
      {name: "svelte", icon: "https://cdn.worldvectorlogo.com/logos/svelte-1.svg"},   
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
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
      { name: "Azure", icon: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
      { name: "Flask", icon: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
      { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    ],
  },
  {
    category: "DevOps",
    description: "For better deployment and management",
    skills: [
      { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws.svg" },
      { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "Linux", icon: " https://cdn.worldvectorlogo.com/logos/linux-1.svg" },
      { name: "ChatGPT", icon: "https://cdn.worldvectorlogo.com/logos/openai.svg" },
      { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github.svg" },
      { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },

    ],
  },
  {
    category: "Tools",
    description: "To make my life easier",
    skills: [
      { name: "VS Code", icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Postman", icon: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
      {name: "Airtable", icon: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg"},
      { name: "Jest", icon: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
      { name: "N8N", icon: "" },
      {name: "Playwright", icon: ""},
      { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm-2.svg" },
      { name: "Selenium", icon: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" },
    ],
  },

]

const TechStack = () => {
  return (
    <div className="w-full px-4 py-8 md:py-16 mx-12">
      <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-2 md:mb-4">
        Tools Of The Trade
      </h2>
      <p className="text-muted-foreground text-center text-sm md:text-base mb-6 md:mb-12">
        Technologies and tools I work with
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {techSkills.map((category) => (
          <div
            key={category.category}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 transition-transform hover:scale-105"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
              {category.category}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6">{category.description}</p>
            
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 p-2 md:p-3 rounded-md border border-gray-300"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  )}
                  <span className="text-sm md:text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;