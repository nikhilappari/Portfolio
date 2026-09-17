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
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#07080a] text-white overflow-hidden pt-20 sm:pt-24 pb-4 sm:pb-6">
      
      {/* 1. Backdrop "PORTFOLIO" for Desktop */}
      <div className="hidden lg:flex absolute top-20 inset-x-0 items-center justify-center pointer-events-none select-none z-0 px-4">
        <h1 className="text-[15vw] font-black text-[#ff2a3b]/35 tracking-tight uppercase leading-none font-sans filter drop-shadow-[0_0_60px_rgba(255,42,59,0.25)]">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. DESKTOP DEAD-CENTERED HERO IMAGE (Keeps PC 100% untouched) */}
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none z-10 pt-20 pb-12">
        <div className="relative h-[82vh] max-h-[750px] aspect-[730/1024] max-w-[85vw] flex items-end justify-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#ff2a3b]/20 rounded-full blur-[85px] pointer-events-none z-0" />
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
                  sizes="550px"
                  className="object-contain object-bottom filter contrast-105 brightness-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>
            );
          })}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>

      {/* 3. MOBILE-OPTIMIZED STRUCTURE: Clean vertical sequence with PORTFOLIO glowing prominently behind the portrait */}
      <div className="lg:hidden flex flex-col items-center w-full z-20 pt-2 pb-4">
        {/* Mobile Portrait Frame with massive full-width PORTFOLIO typography directly in the background */}
        <div className="relative w-full h-[46vh] min-h-[310px] max-h-[400px] flex items-end justify-center mb-4 overflow-visible">
          
          {/* Layered "PORTFOLIO" Backdrop positioned directly behind head and shoulders */}
          <div className="absolute -top-4 sm:-top-6 inset-x-0 w-full px-3 flex items-center justify-center pointer-events-none select-none z-0">
            <h1 className="text-[16.5vw] font-black text-[#ff2a3b]/45 tracking-tight uppercase leading-none font-sans filter drop-shadow-[0_0_30px_rgba(255,42,59,0.55)] whitespace-nowrap select-none">
              PORTFOLIO
            </h1>
          </div>

          {/* Ambient Rim Glow behind head & shoulders */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff2a3b]/30 rounded-full blur-[80px] pointer-events-none z-0" />

          {/* Circular NA Stamp Badge (matching desktop design & animation, positioned near head/upper background area) */}
          <div className="absolute top-1 right-2 min-[360px]:right-4 sm:top-2 sm:right-8 z-20 pointer-events-auto">
            <div className="relative w-[76px] h-[76px] min-[360px]:w-20 min-[360px]:h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <path
                  id="mobileTextPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono fill-gray-300 uppercase tracking-widest font-bold">
                  <textPath href="#mobileTextPath">
                    BUILDING AI SYSTEMS THAT SCALE • NA •
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-11 sm:h-11 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center p-1.5 sm:p-2 shadow-[0_0_20px_rgba(255,42,59,0.75)]">
                <Image
                  src="/na-brush-white.png"
                  alt="NA Logo"
                  width={24}
                  height={19}
                  className="w-[18px] h-[14px] min-[360px]:w-[20px] min-[360px]:h-[16px] sm:w-[24px] sm:h-[19px] object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
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
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-contain object-bottom filter contrast-105 brightness-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>
            );
          })}
          {/* Subtle bottom fade so image merges into the background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07080a] to-transparent pointer-events-none z-20" />
        </div>

        {/* Mobile Text & CTA Section (Completely below the photo - 0% overlap) */}
        <div className="w-full flex flex-col items-center text-center space-y-3">
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-widest text-[#ff2a3b] uppercase block font-bold">
              HI, I'M
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
              NIKHIL APPARI
            </h2>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff2a3b]/15 border border-[#ff2a3b]/40 text-xs">
            <TypewriterText />
          </div>

          <p className="text-gray-300 text-xs leading-relaxed max-w-sm font-sans bg-[#0a0c12]/90 border border-white/10 rounded-2xl p-3.5 shadow-xl">
            I’m an Artificial Intelligence & Machine Learning student passionate about building practical AI solutions, machine learning systems, and modern software applications.
          </p>

          <div className="flex flex-row items-center gap-2.5 pt-1 w-full max-w-xs">
            <a
              href="#work"
              className="crimson-btn flex-1 py-3 px-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xl"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="crimson-outline-btn flex-1 py-3 px-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#07080a]/90"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. DESKTOP MAIN CONTENT OVERLAY CONTAINER (100% Original Desktop Layout) */}
      <div className="hidden lg:flex relative z-20 max-w-7xl mx-auto px-12 w-full flex-1 flex-col justify-center pointer-events-none py-2">
        <div className="grid grid-cols-12 gap-8 items-center w-full pointer-events-auto">
          {/* LEFT COLUMN: Hi I'm + Name + Role + Bio + Action CTAs */}
          <div className="col-span-6 flex flex-col items-start text-left space-y-4 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <span className="text-sm font-mono tracking-widest text-[#ff2a3b] uppercase block font-bold">
                HI, I'M
              </span>
              <h2 className="text-6xl font-black tracking-tight text-white uppercase leading-[0.98] font-sans">
                NIKHIL <br />
                <span className="text-white">APPARI</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 backdrop-blur-md text-xs"
            >
              <TypewriterText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-[13px] max-w-sm leading-relaxed font-sans bg-[#07080a]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-lg"
            >
              I’m an Artificial Intelligence & Machine Learning student passionate about building practical AI solutions. I work across machine learning, software development, backend systems, and modern development tools to turn ideas into useful applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center gap-3 pt-1"
            >
              <a
                href="#work"
                className="crimson-btn px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="crimson-outline-btn px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#07080a]/85 backdrop-blur-md"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Unified Stamp Badge + Metadata Box */}
          <div className="col-span-6 flex flex-col items-end justify-center gap-4 z-30 pointer-events-auto">
            <div className="relative w-28 h-28 flex items-center justify-center">
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
