"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Zap,  // For Automation
  LayoutDashboard, // For Web Dev
  Database, // Data collection
  Search, // Internet research
} from "lucide-react";

const services = [
  {
    title: "Website Development and Creation",
    description:
      "Crafting responsive, user-friendly websites tailored to your business needs, from simple landing pages to complex e-commerce platforms.  I leverage technologies like React, Next.js, TypeScript, Tailwind CSS, and Svelte for the frontend, ensuring a great user experience.  For the backend, I utilize Node.js, Express, Python, Django, PostgreSQL, Prisma, and Firebase, depending on project requirements.  I can also integrate with platforms like Airtable.",
    icon: LayoutDashboard,
    color: "text-blue-500",
    startingPrice: "$100",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Svelte",
      "Node.js",
      "Express",
      "Python",
      "Django",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Airtable",
    ],
  },
  {
    title: "Business/Web Automation",
    description:
      "Streamlining your workflows with custom automation solutions, saving you time and resources. I build robust automations using tools like N8N, Playwright, Selenium, and even leverage the power of ChatGPT for intelligent automation.  I'm also proficient with scripting languages like Python and Node.js for custom solutions.",
    icon: Zap,
    color: "text-yellow-500",
    startingPrice: "Contact for details",
    tools: ["N8N", "Playwright", "Selenium", "ChatGPT", "Python", "Node.js"],
  },
  {
    title: "Data Collection and Analysis",
    description:
      "Gathering and analyzing data to provide actionable insights, helping you make informed decisions. I use tools like Playwright and Selenium for web scraping, and databases like PostgreSQL and Firebase for data storage.  I can also leverage Python and its libraries for data analysis and visualization.",
    icon: Database,
    color: "text-green-500",
    startingPrice: "$50",
    tools: ["Playwright", "Selenium", "PostgreSQL", "Firebase", "Python"],
  },
  {
    title: "Internet Research",
    description:
      "Conducting thorough online research to gather information, identify trends, and provide comprehensive reports. I utilize advanced search techniques and tools, including ChatGPT, to ensure accurate and relevant results.",
    icon: Search,
    color: "text-purple-500",
    startingPrice: "Contact for details",
    tools: ["ChatGPT"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="w-full px-4 py-8 md:py-16 bg-[#030303] min-h-full"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
            Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            What I Can Offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg bg-opacity-95 rounded-xl shadow-xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 min-h-[10em]">
                {service.description}
              </p>
              <p className="text-sm text-white font-semibold">
                Starting Price: {service.startingPrice}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-white mb-1">
                  Tools I Use:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-md bg-gray-700/50 px-2 py-1 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-500/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 