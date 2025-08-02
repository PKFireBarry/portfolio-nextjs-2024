"use client"

import React, { useState, useEffect } from 'react'
import ProjectCard from './project-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '@/data/projects.json';

const projects = projectsData;

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(projects.length)

  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.innerWidth < 768) {
        // Mobile: show 3 projects
        setVisibleProjects(3)
      } else if (window.innerWidth < 1024) {
        // Tablet: show 6 projects
        setVisibleProjects(6)
      } else {
        // Desktop: show all projects
        setVisibleProjects(projects.length)
      }
    }

    updateVisibleProjects()
    window.addEventListener('resize', updateVisibleProjects)
    return () => window.removeEventListener('resize', updateVisibleProjects)
  }, [])

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A collection of projects that showcase my approach to design and development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                tags={project.tags}
                website={project.website}
                features={project.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


