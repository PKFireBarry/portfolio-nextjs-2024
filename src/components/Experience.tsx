"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "2024 - Present",
    title: "Security & Customer Success",
    company: "Apple",
    story: "When someone's digital life gets compromised, they need more than technical fixes. They need trust rebuilt. I help people understand how to protect themselves online, turning security anxiety into confidence through patient education and clear guidance."
  },
  {
    period: "2023 - 2024",
    title: "AI Training & Quality Assurance",
    company: "Scale AI",
    story: "Behind every AI breakthrough are countless hours of careful training and refinement. I helped shape the intelligence that powers everything from autonomous vehicles to creative tools, ensuring AI systems understand context, nuance, and safety. Working with teams building the future at OpenAI, Nvidia, and beyond."
  },
  {
    period: "2022 - Present",
    title: "Freelance Development & Data Solutions",
    company: "Independent",
    story: "Small businesses often struggle to find their customers in a digital world. I build the bridges. Extracting insights from data, automating repetitive tasks, and creating web experiences that help companies connect with the people they serve."
  },
  {
    period: "2021 - Present",
    title: "Hardware Business Owner",
    company: "Extant3DCompute",
    story: "During the chip shortage, people needed reliable computers but couldn't afford retail prices. I built a business around refurbishing and optimizing hardware, proving that quality doesn't always require premium pricing. Generated over $100K while maintaining perfect customer satisfaction."
  }
]

const Experience = () => {
  return (
    <section className="hidden md:block py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l border-zinc-800 pl-8 relative"
            >
              <div className="absolute w-2 h-2 bg-white rounded-full -left-1 top-2" />
              
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-gray-500 font-mono">
                    {exp.period}
                  </span>
                  <span className="hidden md:block text-gray-700">•</span>
                  <span className="text-sm text-gray-400">
                    {exp.company}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-white">
                  {exp.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {exp.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience