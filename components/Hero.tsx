"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const HERO_IMAGES = [
  {
    src: "/images/landing-suit-button.png",
    alt: "Nikhil Appari - Professional Portrait in Suit",
    aspect: "aspect-[745/1024]",
  },
  {
    src: "/images/landing-suit-watch.png",
    alt: "Nikhil Appari - Software Engineer in Black Suit",
    aspect: "aspect-[725/1024]",
  },
  {
    src: "/images/landing-hoodie.png",
    alt: "Nikhil Appari - AI Software Engineer",
    aspect: "aspect-[713/1024]",
  },
];

const ROLES = [
  "AI / ML ENTHUSIAST",
  "PYTHON & FASTAPI DEVELOPER",
  "BUILDING REAL-WORLD AI APPS",
  "FULL-STACK DEVELOPER",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== "") {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <span className="text-[#ff2a3b] font-mono font-bold tracking-wider uppercase">
      {displayedText}
      <span className="animate-ping font-mono inline-block ml-1 text-white">|</span>
    </span>
  );
}

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);

  // Automatically cycle hero photos every 5 seconds with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between bg-[#07080a] text-white overflow-hidden pt-20 sm:pt-24 pb-4 sm:pb-6">
      
      {/* 1. Refined Crimson Red Backdrop "PORTFOLIO" (Layer 0 - Clear of mobile navbar) */}
      <div className="absolute top-24 sm:top-28 lg:top-20 inset-x-0 flex items-center justify-center pointer-events-none select-none z-0 px-2 sm:px-4">
        <h1 className="text-[17vw] sm:text-[15vw] lg:text-[15vw] font-black text-[#ff2a3b]/35 tracking-tight uppercase leading-none font-sans filter drop-shadow-[0_0_60px_rgba(255,42,59,0.25)]">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. DEAD-CENTERED HERO IMAGE (Full Head Clearance + Ambient Glow + Rock-Solid Crossfade) */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 pt-20 sm:pt-24 lg:pt-20 pb-10 sm:pb-14 lg:pb-12">
        <div className="relative h-[65vh] sm:h-[72vh] lg:h-[82vh] max-h-[750px] aspect-[730/1024] max-w-[92vw] sm:max-w-[85vw] flex items-end justify-center">
          
          {/* Subtle Ambient Rim Glow behind head & shoulders */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-[#ff2a3b]/20 rounded-full blur-[85px] pointer-events-none z-0" />

          {/* Stacked Crossfade: Never collapses, never leaves a blank void */}
          {HERO_IMAGES.map((img, idx) => {
            const isActive = imageIndex === idx;
            return (
              <motion.div
                key={img.src}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.98,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute inset-0 w-full h-full flex items-end justify-center ${
                  isActive ? "z-10" : "z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 550px"
                  className="object-contain object-bottom filter contrast-105 brightness-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>
            );
          })}

          {/* Subtle bottom fade into dark obsidian canvas */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>

      {/* 3. Main Content Overlay Container (Layer 20 & 30) - Docked cleanly on mobile so face is clear */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-end lg:justify-center pointer-events-none pb-6 sm:pb-8 lg:py-2">
        
        {/* Content Grid: Left Editorial Details + Right Stamp & Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end lg:items-center w-full pointer-events-auto">
          
          {/* LEFT COLUMN: Hi I'm + Vignesh Pandiya + Role + Bio + Action CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-2.5 sm:space-y-4 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-0.5 sm:space-y-1"
            >
              <span className="text-[11px] sm:text-sm font-mono tracking-widest text-[#ff2a3b] uppercase block font-bold">
                HI, I'M
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.98] font-sans">
                NIKHIL <br />
                <span className="text-white">APPARI</span>
              </h2>
            </motion.div>

            {/* Dynamic Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 backdrop-blur-md text-[11px] sm:text-xs"
            >
              <TypewriterText />
            </motion.div>

            {/* Subtext Paragraph - Humanized & Clear */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-xs sm:text-[13px] max-w-sm leading-normal sm:leading-relaxed font-sans bg-[#07080a]/90 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-white/10 shadow-lg"
            >
              I’m an Artificial Intelligence & Machine Learning student passionate about building practical AI solutions. I work across machine learning, software development, backend systems, and modern development tools to turn ideas into useful applications.
            </motion.p>

            {/* Action Buttons - Clean side-by-side horizontal row on both mobile & desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="crimson-btn flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="crimson-outline-btn flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 bg-[#07080a]/85 backdrop-blur-md"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Unified Stamp Badge + Metadata Box (Cleanly Paired) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col items-end justify-center gap-4 z-30 pointer-events-auto">
            
            {/* Spinning Circular Stamp Badge */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <path
                  id="textPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono fill-gray-300 uppercase tracking-widest font-bold">
                  <textPath href="#textPath">
                    BUILDING AI SYSTEMS THAT SCALE • NA •
                  </textPath>
                </text>
              </svg>
              {/* Center Badge Core with Red Glow and Brush NA Logo */}
              <div className="absolute w-12 h-12 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center p-2 shadow-[0_0_22px_rgba(255,42,59,0.7)]">
                <Image
                  src="/na-brush-white.png"
                  alt="NA Logo"
                  width={28}
                  height={22}
                  className="object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            {/* Right Meta Info Block (Based In, Education, Focus, Available) */}
            <div className="flex flex-col gap-2 text-right font-mono text-xs border-r-2 border-[#ff2a3b] pr-4 py-3 pl-5 bg-[#07080a]/90 backdrop-blur-md rounded-l-2xl border-l border-y border-white/10 shadow-2xl">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase tracking-widest font-bold">BASED IN</span>
                <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase tracking-widest font-bold">EDUCATION</span>
                <span className="text-[#ff2a3b] font-bold">B.TECH — AI & ML</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase tracking-widest font-bold">FOCUS</span>
                <span className="text-white font-bold">AI / ML • SOFTWARE</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase tracking-widest font-bold">AVAILABLE FOR</span>
                <div className="flex items-center justify-end gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">INTERNSHIPS & PROJECTS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Bottom Photo Switch Indicator & Scroll Arrow - Dedicated Bottom Position */}
      <div className="relative z-30 w-full flex flex-col items-center gap-2 pb-2 pointer-events-auto">
        {/* Subtle Carousel Dots */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07080a]/85 backdrop-blur-md border border-white/10 shadow-lg">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImageIndex(idx)}
              aria-label={`Switch to photo ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                imageIndex === idx
                  ? "w-6 h-1.5 bg-[#ff2a3b] shadow-[0_0_8px_#ff2a3b]"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#ff2a3b] transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#ff2a3b]" />
        </a>
      </div>
    </section>
  );
}
