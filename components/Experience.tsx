"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience & Activities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Experience & Activities<span className="text-[#ff2a3b]">.</span>
          </h2>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12 max-w-4xl ml-2 sm:ml-4">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-[#07080a] border-2 border-[#ff2a3b] group-hover:bg-[#ff2a3b] transition-colors shadow-lg shadow-[#ff2a3b]/50" />

              <div className="crimson-glass-card p-6 sm:p-8 rounded-3xl group-hover:border-[#ff2a3b]/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-[#ff2a3b] font-bold tracking-wider">{exp.company}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
                    {exp.period && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    )}
                    {exp.location && (
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#ff2a3b] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#ff2a3b]/10 text-white border border-[#ff2a3b]/20 hover:border-[#ff2a3b]/50 transition-colors"
                    >
                      {tech}
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
