"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "DSA", href: "#dsa" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight logic based on scroll position
      const scrollPos = window.scrollY + 200;
      const sectionIds = ["about", "projects", "skills", "experience", "dsa", "contact"];
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sectionIds[i]}`);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07080a]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      {/* Top Animated Crimson Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#ff2a3b] origin-left z-50 shadow-[0_0_12px_#ff2a3b]"
        style={{ scaleX }}
      />

      {/* Top Banner Line */}
      <div className="border-b border-white/5 py-2 px-6 text-[11px] font-mono tracking-widest uppercase flex items-center justify-between text-gray-400">
        <span className="text-[#ff2a3b] font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-ping" />
          <span>AI / ML ENTHUSIAST</span>
        </span>

        <a
          href="#contact"
          className="hidden sm:flex items-center gap-1 text-[#ff2a3b] hover:underline font-bold"
        >
          <span>OPEN TO INTERNSHIPS & PROJECTS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Navbar - Clean matched layout matching user image */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo: Brush NA logo with crimson dot */}
        <Link
          href="#"
          className="flex items-center gap-1 group select-none py-0.5"
        >
          <Image
            src="/na-brush-logo.png"
            alt="Nikhil Appari NA Logo"
            width={48}
            height={34}
            priority
            className="object-contain h-7 sm:h-8 w-auto filter drop-shadow-[0_0_10px_rgba(255,42,59,0.3)] group-hover:scale-105 transition-transform"
          />
          <span className="text-[#ff2a3b] text-2xl sm:text-3xl leading-none ml-1">•</span>
        </Link>

        {/* Desktop Navigation Links with active section detection */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs font-mono tracking-widest transition-all duration-200 py-1 ${
                  isActive
                    ? "text-[#ff2a3b] font-bold"
                    : "text-gray-300 hover:text-[#ff2a3b]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff2a3b] shadow-[0_0_8px_#ff2a3b] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Pill Outline Resume Button matching user screenshot */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nikhil_Appari_Resume.pdf"
            className="crimson-outline-btn px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,42,59,0.3)] transition-all"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c12] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono tracking-widest py-1 flex items-center justify-between ${
                  isActive ? "text-[#ff2a3b] font-bold" : "text-gray-300 hover:text-[#ff2a3b]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#ff2a3b]" />}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nikhil_Appari_Resume.pdf"
              className="crimson-outline-btn w-full text-center block px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
