"use client";

import React from "react";
import { ArrowUp, FileText, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07080a] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Quote Bar from Reference UI */}
        <div className="crimson-glass-card p-8 rounded-3xl border border-[#ff2a3b]/20 bg-[#0a0c12]/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs font-mono text-[#ff2a3b] uppercase tracking-widest font-bold">CORE PHILOSOPHY</p>
            <p className="text-base sm:text-lg font-serif italic text-gray-200">
              “Learn continuously. Solve real problems. Build technology that makes a difference.”
            </p>
          </div>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nikhil_Appari_Resume.pdf"
            className="crimson-outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase flex-shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Navigation & Social Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-black font-sans text-[#ff2a3b] tracking-wider">NA</span>
            <span className="text-gray-600">|</span>
            <p className="text-xs font-mono text-gray-400">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#12141f] text-gray-400 hover:text-white hover:bg-[#ff2a3b] transition-all duration-300 border border-white/10"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#12141f] text-gray-400 hover:text-white hover:bg-[#ff2a3b] transition-all duration-300 border border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-[#12141f] text-gray-400 hover:text-white hover:bg-[#ff2a3b] transition-all duration-300 border border-white/10"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#12141f] text-gray-300 hover:text-white hover:border-[#ff2a3b] border border-white/10 text-xs font-mono transition-all duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff2a3b]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
