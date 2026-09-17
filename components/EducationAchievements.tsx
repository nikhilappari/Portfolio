"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "@/data/portfolioData";

export default function EducationAchievements() {
  return (
    <section id="dsa" className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      <span id="education" className="absolute -top-20" />
      <span id="achievements" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Education & Achievements */}
          <div className="lg:col-span-7 space-y-16">
            {/* Education Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-8 uppercase">
                Education<span className="text-[#ff2a3b]">.</span>
              </h2>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="crimson-glass-card p-6 rounded-3xl group-hover:border-[#ff2a3b]/50 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#ff2a3b]/10 text-[#ff2a3b] border border-[#ff2a3b]/30 font-bold self-start sm:self-auto">
                        {edu.score ? `Score: ${edu.score}` : edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{edu.institution}</p>
                    {edu.score && <p className="text-xs font-mono text-gray-400 mt-2">{edu.period}</p>}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Honors & Achievements */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase mb-3">
                <Trophy className="w-3.5 h-3.5" />
                <span>Recognition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-8 uppercase">
                Achievements & Activities<span className="text-[#ff2a3b]">.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="crimson-glass-card p-5 rounded-2xl group-hover:border-[#ff2a3b] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-[#ff2a3b] mb-2">
                      <Sparkles className="w-4 h-4" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight">{ach.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 crimson-glass-card p-8 rounded-3xl border border-[#ff2a3b]/20 shadow-2xl bg-[#0a0c12]/90">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Certifications</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">
                Credentials & Specializations
              </h3>

              <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={`${cert.title}-${cert.issuer}-${idx}`}
                    className="p-3.5 rounded-2xl bg-[#0f111a] border border-[#ff2a3b]/20 flex items-start gap-3 hover:border-[#ff2a3b] transition-colors shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff2a3b] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide uppercase">{cert.title}</h4>
                      <p className="text-[11px] font-mono text-gray-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
