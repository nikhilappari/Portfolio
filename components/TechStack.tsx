"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles, Check, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesList = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      <span id="stack" className="absolute -top-20" />
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ff2a3b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Technical Skills<span className="text-[#ff2a3b]">.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl font-sans">
            Technologies and tools I use to build projects, analyze data, and solve problems.
          </p>
        </motion.div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? "bg-[#ff2a3b] text-white font-bold border-[#ff2a3b] shadow-lg shadow-[#ff2a3b]/30"
                    : "bg-[#12141f]/70 text-gray-400 border-white/10 hover:text-white hover:border-[#ff2a3b]/40"
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SKILL_CATEGORIES.filter((cat) => activeCategory === "All" || cat.category === activeCategory).map(
              (catGroup, idx) => (
                <motion.div
                  key={catGroup.category}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="crimson-glass-card p-7 rounded-3xl group-hover:border-[#ff2a3b]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-black text-white tracking-tight uppercase">{catGroup.title || catGroup.category}</h3>
                      <Sparkles className="w-4 h-4 text-[#ff2a3b]" />
                    </div>
                    <p className="text-xs text-gray-400 mb-6 font-mono">{catGroup.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {catGroup.skills.map((skill) => (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          key={skill.name}
                          className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0f17] border border-[#ff2a3b]/20 hover:border-[#ff2a3b] transition-all duration-200 shadow-md"
                        >
                          <Check className="w-3.5 h-3.5 text-[#ff2a3b]" />
                          <span className="text-xs font-mono text-gray-200 font-medium">{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30 font-bold">
                              {skill.tag}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 text-[#ff2a3b] font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{catGroup.footerHighlight || "Core Proficiency"}</span>
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
