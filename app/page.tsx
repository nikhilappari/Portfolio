"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import EducationAchievements from "@/components/EducationAchievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (!loadingComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loadingComplete]);

  return (
    <>
      {/* 1-100% Animated Loading Progress Bar & Scroll To Open Overlay */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      <main className="relative min-h-screen bg-[#07080a] text-white selection:bg-[#ff2a3b] selection:text-white overflow-x-hidden">
        {/* Ambient Background */}
        <BackgroundCanvas />

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

      {/* Infinite Tech Marquee Ribbon */}
      <div className="relative z-20 border-y border-white/10 py-3.5 bg-[#0a0c12]/95 backdrop-blur-md overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-gray-400">
          <span>• MACHINE LEARNING</span>
          <span className="text-[#ff2a3b] font-bold">• PYTHON</span>
          <span>• DATA STRUCTURES & ALGORITHMS</span>
          <span className="text-[#ff2a3b] font-bold">• C++</span>
          <span>• AI & ML</span>
          <span className="text-[#ff2a3b] font-bold">• SCIKIT-LEARN</span>
          <span>• PANDAS</span>
          <span className="text-[#ff2a3b] font-bold">• NUMPY</span>
          <span>• REACT</span>
          <span className="text-[#ff2a3b] font-bold">• SPRING BOOT</span>
          <span>• JAVA</span>
          <span className="text-[#ff2a3b] font-bold">• MYSQL</span>
          <span>• MONGODB</span>
          <span className="text-[#ff2a3b] font-bold">• GIT & GITHUB</span>
          <span>• LEETCODE</span>
          <span className="text-[#ff2a3b] font-bold">• CODECHEF</span>
          <span>• PROBLEM SOLVING</span>
          <span>• MACHINE LEARNING</span>
          <span className="text-[#ff2a3b] font-bold">• PYTHON</span>
          <span>• DATA STRUCTURES & ALGORITHMS</span>
          <span className="text-[#ff2a3b] font-bold">• C++</span>
          <span>• AI & ML</span>
          <span className="text-[#ff2a3b] font-bold">• SCIKIT-LEARN</span>
          <span>• PANDAS</span>
          <span className="text-[#ff2a3b] font-bold">• NUMPY</span>
          <span>• REACT</span>
          <span className="text-[#ff2a3b] font-bold">• SPRING BOOT</span>
          <span>• JAVA</span>
          <span className="text-[#ff2a3b] font-bold">• MYSQL</span>
          <span>• MONGODB</span>
          <span className="text-[#ff2a3b] font-bold">• GIT & GITHUB</span>
          <span>• LEETCODE</span>
          <span className="text-[#ff2a3b] font-bold">• CODECHEF</span>
          <span className="text-[#ff2a3b] font-bold">• PROBLEM SOLVING</span>
        </div>
      </div>

      {/* Editorial Profile Section */}
      <About />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* AI System Architecture Diagram */}
      <Architecture />

      {/* Professional Work Experience */}
      <Experience />

      {/* Technical Skill Stack */}
      <TechStack />

      {/* Education, Achievements & Certifications */}
      <EducationAchievements />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
    </>
  );
}
