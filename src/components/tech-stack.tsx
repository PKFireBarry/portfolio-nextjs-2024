import { Card } from "@/components/ui/card"

const techSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "TypeScript", icon: "" },
      { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
      { name: "Redux", icon: "" },
      { name: "GraphQL", icon: "" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" },
      { name: "Express", icon: "" },
      { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
      { name: "Django", icon: "" },
      { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MongoDB", icon: "" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: "" },
      { name: "AWS", icon: "" },
      { name: "CI/CD", icon: "" },
      { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "Linux", icon: "" },
      { name: "Nginx", icon: "" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Postman", icon: "" },
      { name: "Figma", icon: "https://cdn.worldvectorlogo.com/logos/figma-5.svg" },
      { name: "Jest", icon: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
      { name: "GitHub", icon: "" },
      { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "HTML", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
      { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
      { name: "Bootstrap", icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" },
      { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "Material-UI", icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
      { name: "JQuery", icon: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg" },
      { name: "Flask", icon: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
      { name: "Prisma", icon: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg" },
      { name: "Azure", icon: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
      { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm-2.svg" },
      { name: "Selenium", icon: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" },
    ],
  },
]

export default function TechStack() {
  return (
    <>
          <div className="text-center mb-8">
  <h2 className="text-3xl font-bold text-white">Technical Tools</h2>
  <p className="text-muted-foreground mt-2">Technologies and tools I work with to build my projects</p>
</div>
    <div className="grid gap-6 md:grid-cols-2">

      {techSkills.map((category) => (
        <Card key={category.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center">
                {skill.icon && <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />}
                <span className="font-medium gap-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>    
    </>

  )
}