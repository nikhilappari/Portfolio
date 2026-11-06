"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
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
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#07080a] text-white overflow-hidden pt-14 sm:pt-20 lg:pt-24 pb-2 sm:pb-4">
      
      {/* 1. Backdrop "PORTFOLIO" for Desktop (Calibrated so left 'P' and right 'O' are 100% visible) */}
      <div className="hidden lg:flex absolute top-32 xl:top-36 2xl:top-40 inset-x-0 items-center justify-center pointer-events-none select-none z-0 px-2 sm:px-4 lg:px-6 w-full overflow-hidden filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]">
        <h1 className="font-portfolio text-[20vw] xl:text-[20.8vw] 2xl:text-[21.5vw] font-normal uppercase leading-none tracking-[-0.025em] whitespace-nowrap select-none transform scale-x-[1.05] scale-y-[1.12] origin-center bg-gradient-to-b from-[#e01b36] from-0% via-[#860b19] via-40% to-[#140205] to-82% bg-clip-text text-transparent">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. DESKTOP DEAD-CENTERED HERO IMAGE */}
      <div className="hidden lg:flex absolute inset-0 items-end justify-center pointer-events-none z-10 pt-16 pb-12">
        <div className="relative h-[84vh] max-h-[780px] aspect-[730/1024] max-w-[85vw] flex items-end justify-center">
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
                  sizes="600px"
                  className="object-contain object-bottom filter contrast-105 brightness-105 drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>
            );
          })}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>

      {/* 3. MOBILE-OPTIMIZED STRUCTURE */}
      <div className="lg:hidden flex flex-col items-center w-full z-20 pt-2 pb-4">
        <div className="relative w-full h-[46vh] min-h-[310px] max-h-[400px] flex items-end justify-center mb-4 overflow-visible">
          <div className="absolute top-2 sm:top-4 inset-x-0 w-full px-1 sm:px-2 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]">
            <h1 className="font-portfolio text-[20vw] min-[380px]:text-[20.5vw] font-normal uppercase leading-none tracking-[-0.025em] whitespace-nowrap select-none transform scale-x-[1.05] scale-y-[1.12] origin-center bg-gradient-to-b from-[#e01b36] from-0% via-[#860b19] via-40% to-[#140205] to-82% bg-clip-text text-transparent">
              PORTFOLIO
            </h1>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff2a3b]/30 rounded-full blur-[80px] pointer-events-none z-0" />

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
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07080a] to-transparent pointer-events-none z-20" />

          <div className="absolute bottom-2 right-2 min-[360px]:right-4 sm:bottom-4 sm:right-8 z-30 pointer-events-auto">
            <div className="relative w-[76px] h-[76px] min-[360px]:w-20 min-[360px]:h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path id="mobileBadgePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[9.25px] font-mono fill-gray-300 uppercase tracking-widest font-bold">
                  <textPath href="#mobileBadgePath">
                    {"BUILDING AI SYSTEMS THAT SCALE • NA • "}
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
        </div>

        <div className="w-full flex flex-col items-center text-center space-y-3">
          <div className="space-y-1">
            <span className="font-script text-2xl font-semibold text-white tracking-wide block transform -rotate-1">
              Hello, I&apos;m
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-none font-sans">
              NIKHIL APPARI
            </h2>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff2a3b]/15 border border-[#ff2a3b]/40 text-xs">
            <TypewriterText />
          </div>

          <p className="text-gray-300 text-xs leading-relaxed max-w-sm font-sans bg-[#0a0c12]/90 border border-white/10 rounded-2xl p-3.5 shadow-xl">
            Artificial Intelligence & Machine Learning student passionate about building practical AI solutions, machine learning systems, and modern software applications.
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

      {/* 4. DESKTOP MAIN CONTENT OVERLAY CONTAINER (Edge-to-edge fit matching reference image) */}
      <div className="hidden lg:flex relative z-20 w-full max-w-[1800px] mx-auto px-8 lg:px-12 xl:px-16 2xl:px-20 flex-1 flex-col justify-between pointer-events-none pt-2 pb-2">
        
        {/* Top Editorial Subheader Row (matching reference image) */}
        <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-400 pointer-events-auto z-30 pt-1">
          <div className="space-y-0.5 text-left">
            <p className="text-[#ff2a3b] font-bold">AI & ML ENTHUSIAST</p>
            <p className="text-gray-400 text-[11px]">BUILDING PRACTICAL SOLUTIONS</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300 font-bold text-[11px]">AVAILABLE FOR COLLABORATION</span>
          </div>
        </div>

        {/* Center Grid: Left Column & Right Column spanning edge-to-edge */}
        <div className="grid grid-cols-12 gap-6 items-center w-full pointer-events-auto my-auto py-4">
          
          {/* LEFT COLUMN: Hello, I'm + NIKHIL APPARI + Role + Bio + Explore CTA + Location */}
          <div className="col-span-5 xl:col-span-4 flex flex-col items-start text-left space-y-4 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <span className="font-script text-3xl xl:text-4xl 2xl:text-[2.6rem] font-semibold text-white tracking-wide block transform -rotate-1 origin-bottom-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                Hello, I&apos;m
              </span>
              <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight text-white uppercase leading-[0.94] font-sans">
                NIKHIL <br />
                <span className="text-white">APPARI<span className="text-[#ff2a3b]">.</span></span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="text-sm xl:text-base font-mono font-bold text-[#ff2a3b] uppercase tracking-wider">
                AI & MACHINE LEARNING DEVELOPER
              </p>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 backdrop-blur-md text-xs">
                <TypewriterText />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-xs xl:text-sm max-w-md leading-relaxed font-sans bg-[#07080a]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              Artificial Intelligence & Machine Learning student passionate about building practical AI solutions. Working across machine learning, software development, backend systems, and modern tools to turn ideas into useful applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1"
            >
              <a
                href="#work"
                className="crimson-btn px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="crimson-outline-btn px-5 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-[#07080a]/85 backdrop-blur-md"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
              </a>
            </motion.div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#ff2a3b]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* CENTER GAP (Portrait sits absolute behind this center area) */}
          <div className="col-span-2 xl:col-span-4 pointer-events-none" />

          {/* RIGHT COLUMN: Rotating Badge + Metrics Stack + Download CV (matching reference screenshot) */}
          <div className="col-span-5 xl:col-span-4 flex flex-col items-end justify-center space-y-5 z-30 pointer-events-auto">
            <div className="relative w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[9.25px] font-mono fill-gray-300 uppercase tracking-widest font-bold">
                  <textPath href="#textPath">
                    {"BUILDING AI SYSTEMS THAT SCALE • NA • "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center p-2 shadow-[0_0_22px_rgba(255,42,59,0.7)]">
                <Image
                  src="/na-brush-white.png"
                  alt="NA Logo"
                  width={28}
                  height={22}
                  className="object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div className="space-y-3.5 text-right bg-[#07080a]/85 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl min-w-[260px]">
              <div className="flex items-baseline justify-end gap-3.5 border-b border-white/10 pb-3">
                <span className="text-3xl xl:text-4xl 2xl:text-5xl font-black text-white font-sans tracking-tight">400+</span>
                <span className="text-[10px] xl:text-[11px] font-mono text-gray-400 uppercase tracking-widest leading-tight text-left max-w-[130px]">
                  LEETCODE PROBLEMS SOLVED
                </span>
              </div>
              <div className="flex items-baseline justify-end gap-3.5 border-b border-white/10 pb-3">
                <span className="text-3xl xl:text-4xl 2xl:text-5xl font-black text-white font-sans tracking-tight">35+</span>
                <span className="text-[10px] xl:text-[11px] font-mono text-gray-400 uppercase tracking-widest leading-tight text-left max-w-[130px]">
                  CODECHEF CONTESTS PARTICIPATED
                </span>
              </div>
              <div className="flex items-baseline justify-end gap-3.5">
                <span className="text-3xl xl:text-4xl 2xl:text-5xl font-black text-[#ff2a3b] font-sans tracking-tight">8.9</span>
                <span className="text-[10px] xl:text-[11px] font-mono text-gray-400 uppercase tracking-widest leading-tight text-left max-w-[130px]">
                  B.TECH CGPA (AI & ML)
                </span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nikhil_Appari_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-300 hover:text-[#ff2a3b] transition-colors py-2 px-3 rounded-full hover:bg-white/5 border border-white/5 hover:border-[#ff2a3b]/30"
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#ff2a3b]" />
              <span>DOWNLOAD RESUME / CV</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar (Desktop edge-to-edge matching reference image) */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-gray-400 pointer-events-auto z-30 pt-2 pb-1 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b]" />
            <span className="text-white font-bold">EXPLORE WORK</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">AI & FULL-STACK</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#07080a]/85 backdrop-blur-md border border-white/10 shadow-lg">
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
              className="flex items-center gap-1.5 text-gray-400 hover:text-[#ff2a3b] transition-colors"
            >
              <span>SCROLL TO DISCOVER</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#ff2a3b]" />
            </a>
          </div>

          <div className="text-right text-gray-400">
            <span>SELECTED WORK / 2024–2026</span>
          </div>
        </div>
      </div>

      {/* 5. Mobile Bottom Photo Switcher & Scroll Arrow */}
      <div className="lg:hidden relative z-30 w-full flex flex-col items-center gap-2 pb-2 pointer-events-auto">
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
