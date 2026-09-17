"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Database, Network, Server, User, Compass, Target, Layers, Terminal, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const corePillars = [
    {
      icon: Cpu,
      title: "Machine Learning",
      desc: "Building practical ML models using Python and libraries such as Scikit-learn for classification, prediction and data analysis.",
    },
    {
      icon: Target,
      title: "Problem Solving",
      desc: "Practicing Data Structures & Algorithms through LeetCode and competitive programming, with a focus on efficient solutions.",
    },
    {
      icon: Database,
      title: "AI & Data",
      desc: "Exploring data preprocessing, feature engineering, model evaluation and machine learning workflows.",
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      desc: "Building web applications using modern frontend technologies, backend services and databases.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "UNDERSTAND",
      icon: Compass,
      desc: "Understand the real-world problem, requirements, users, and expected outcome.",
    },
    {
      step: "02",
      title: "EXPLORE",
      icon: Target,
      desc: "Study the data, algorithms, and technologies needed to solve the problem.",
    },
    {
      step: "03",
      title: "BUILD",
      icon: Layers,
      desc: "Develop the solution using Python, ML algorithms, DSA, and web technologies.",
    },
    {
      step: "04",
      title: "EVALUATE",
      icon: Terminal,
      desc: "Test the solution, analyze results, and improve accuracy and performance.",
    },
    {
      step: "05",
      title: "DEPLOY",
      icon: Rocket,
      desc: "Turn the project into a usable application and continue improving it through feedback.",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff2a3b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight uppercase font-sans">
            SOLVING PROBLEMS WITH CODE, <br className="hidden sm:inline" />
            <span className="text-[#ff2a3b] underline decoration-[#ff2a3b]/30">DATA & AI.</span>
          </h2>
        </div>

        {/* Editorial Content & Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-10">
          
          {/* LEFT COLUMN: Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            {/* Portrait Card */}
            <div className="crimson-glass-card p-3 rounded-3xl relative overflow-hidden">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0a0c10]">
                <Image
                  src="/images/nikhil-portrait.png"
                  alt="Nikhil Appari"
                  fill
                  className="object-cover object-top filter contrast-105 brightness-95 transition-all duration-700 group-hover:scale-105"
                  priority
                />

                {/* Corner Crimson Accent Tag */}
                <div className="absolute top-3.5 right-3.5 bg-[#ff2a3b] text-white text-[10px] font-mono tracking-widest px-3 py-1 rounded-full font-bold uppercase shadow-lg">
                  ENTHUSIAST
                </div>

                {/* Overlay Glass Badge */}
                <div className="crimson-glass-card absolute bottom-3 left-3 right-3 p-3.5 rounded-xl text-left shadow-2xl backdrop-blur-xl">
                  <p className="text-sm font-bold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                  <p className="text-xs font-mono text-[#ff2a3b] font-semibold">{PERSONAL_INFO.role}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-mono">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Editorial Story & Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-5 justify-between"
          >
            <div className="prose max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
              <p>
                Hi, I'm Nikhil. I'm an AI & ML student who enjoys solving problems through code and building practical software. I'm currently focused on Machine Learning, Data Structures & Algorithms, Python, and full-stack development.
              </p>
              <p>
                I enjoy turning real-world problems into working projects — from machine learning prediction systems and intelligent search applications to web applications and automation tools. I'm continuously improving my problem-solving skills through DSA and competitive programming while exploring how AI can be applied to useful real-world solutions.
              </p>
            </div>

            {/* Core Capability Grid with Crimson Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.2 } }}
                    className="crimson-glass-card p-4 sm:p-4.5 rounded-2xl group hover:border-[#ff2a3b]/60 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#ff2a3b]/10 border border-[#ff2a3b]/25 text-[#ff2a3b] flex items-center justify-center mb-2.5 group-hover:bg-[#ff2a3b] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 tracking-wide">{pillar.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                    {/* Hover subtle glow ring */}
                    <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#ff2a3b]/10 rounded-full blur-xl group-hover:bg-[#ff2a3b]/20 transition-all pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Impact Metric Counters - Full Horizontal Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14 sm:mb-16 font-mono w-full"
        >
          {[
            { label: "DSA PROBLEMS", val: "400+" },
            { label: "ML PROJECTS", val: "04+" },
            { label: "WEB PROJECTS", val: "10+" },
            { label: "TYPING SPEED", val: "60+ WPM" },
            { label: "CONTESTS", val: "35+" },
            { label: "FOCUS", val: "AI/ML" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0a0c12]/90 border border-white/10 hover:border-[#ff2a3b]/60 text-center transition-all shadow-xl group relative overflow-hidden"
            >
              <span className="text-2xl sm:text-3xl font-black text-white block tracking-tight group-hover:text-[#ff2a3b] transition-colors">
                {stat.val}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase block mt-1 font-bold">
                {stat.label}
              </span>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#ff2a3b]/10 rounded-full blur-lg group-hover:bg-[#ff2a3b]/20 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* WORKFLOW BREAKDOWN SECTION (01 - 05) */}
        <div className="pt-12 sm:pt-14 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-[#ff2a3b] text-xs font-mono tracking-widest uppercase block mb-1">HOW I BUILD</span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
                FROM PROBLEM TO SOLUTION
              </h3>
            </div>
            <p className="text-xs font-mono text-gray-400 max-w-xs">
              A straightforward process focused on problem-solving, clean code, and working solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="crimson-glass-card p-6 rounded-2xl relative flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#ff2a3b]/80 font-mono group-hover:text-[#ff2a3b] transition-colors">
                        {item.step}
                      </span>
                      <IconComp className="w-5 h-5 text-gray-500 group-hover:text-[#ff2a3b] transition-colors" />
                    </div>
                    <h4 className="text-base font-black text-white tracking-wider uppercase mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full h-0.5 bg-[#ff2a3b]/20 mt-6 group-hover:bg-[#ff2a3b] transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
