"use client";

import { motion } from "framer-motion"

const capabilities = [
  {
    title: "Custom Business Applications",
    description: "Built exactly what you need, not a generic template. Whether it's a booking system for your service business or a marketplace connecting customers with contractors.",
    examples: "React, Next.js, TypeScript, Node.js, Tailwind CSS, Authentication, API Integrations, Payment Processing"
  },
  {
    title: "Process Automation",
    description: "Stop doing the same tasks over and over. I build systems that handle lead generation, data entry, email follow-ups, and other repetitive work automatically.",
    examples: "LLM Integrations, Workflow Automation, Browser Automation, AI Agents"
  },
  {
    title: "Business Intelligence",
    description: "Find out what's actually working in your business. I extract data from your existing systems and turn it into reports that help you make better decisions.",
    examples: "Web Scraping, Data Visualization, Data Analysis, Market Research"
  },
  {
    title: "Compliance & Standards",
    description: "Build applications that meet industry requirements like GDPR for data protection or SOC 2 for enterprise clients who need proper security standards.",
    examples: "GDPR Compliance, SOC 2 Standards, Enterprise Security"
  }
]

const TechStack = () => {
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
            What I Build
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solutions that solve real problems, not just technical demonstrations
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-white">
                {capability.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {capability.description}
              </p>
              
              <p className="text-sm text-gray-500 font-mono">
                {capability.examples}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;