"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FolderGit2, FileText } from "lucide-react";
import { FEATURED_PROJECTS, Project, PERSONAL_INFO } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      <span id="work" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#ff2a3b] font-bold uppercase">
              FEATURED PROJECTS
            </span>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#ff2a3b] tracking-wider uppercase transition-colors"
          >
            <span>VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="crimson-glass-card group relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Subtle top-right ambient hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2a3b]/10 rounded-full blur-2xl group-hover:bg-[#ff2a3b]/25 transition-all duration-300 pointer-events-none" />

              <div>
                {/* Red Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#ff2a3b] text-white font-mono text-xs font-black flex items-center justify-center shadow-lg shadow-[#ff2a3b]/30 group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-pulse" />
                    {project.technologies[0]}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1 group-hover:text-[#ff2a3b] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[11px] font-mono text-[#ff2a3b] mb-3 uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 group-hover:text-[#ff2a3b] font-bold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>CASE STUDY</span>
                </button>

                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#ff2a3b] group-hover:text-white text-gray-400 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
