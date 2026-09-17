"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Cpu, Layers, Terminal, Server } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0a0c12] border border-[#ff2a3b]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-[#ff2a3b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top metadata */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff2a3b] font-bold tracking-widest uppercase">
              PROJECT {project.number}
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-xs text-gray-400 font-mono">{project.subtitle}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight uppercase">
            {project.title}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full bg-[#ff2a3b]/10 text-white border border-[#ff2a3b]/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Architecture & Engineering Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Problem & Solution */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-[#ff2a3b]" />
                  <h3 className="text-sm font-bold text-white uppercase">The Problem</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {project.architecture.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#ff2a3b]" />
                  <h3 className="text-sm font-bold text-white uppercase">How I Solved It</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {project.architecture.solution}
                </p>
              </div>
            </div>

            {/* System Pipeline Diagram Steps */}
            <div className="p-5 rounded-2xl bg-[#0f111a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-[#ff2a3b]" />
                  <h3 className="text-sm font-bold text-white uppercase">How It Works (Step-by-Step)</h3>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  {project.architecture.diagramSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#ff2a3b]/20 border border-[#ff2a3b]/40 flex items-center justify-center text-[10px] text-[#ff2a3b] font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contribution & Results */}
          <div className="p-5 rounded-2xl bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 mb-8 space-y-3">
            <div className="flex items-start gap-2 text-xs text-gray-200 font-sans">
              <Server className="w-4 h-4 text-[#ff2a3b] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white">What I Built: </strong>
                <span>{project.architecture.myRole}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-200 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white">The Outcome: </strong>
                <span>{project.architecture.keyResult}</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="crimson-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>View Source Code on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
            >
              Close Case Study [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
