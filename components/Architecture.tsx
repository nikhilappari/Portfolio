"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Palette,
  Eye,
  FileText,
  Send,
  ScanText,
  Filter,
  CheckCircle2,
  Database,
  BarChart3,
  Cpu,
  TrendingUp,
  CheckSquare,
  FileSpreadsheet,
  DollarSign,
  ShieldAlert,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  ArrowRight,
  Workflow,
} from "lucide-react";

interface WorkflowPattern {
  id: string;
  name: string;
  badge: string;
  description: string;
  nodes: {
    title: string;
    sub: string;
    icon: React.ElementType;
  }[];
}

const PROJECT_WORKFLOWS: WorkflowPattern[] = [
  {
    id: "artist-portfolio",
    name: "ARTIST PORTFOLIO",
    badge: "Artwork Showcase & Commissions",
    description:
      "A seamless digital journey allowing art enthusiasts to explore personal artwork collections, inspect sketches in high detail, and submit custom commission inquiries.",
    nodes: [
      { title: "USER", sub: "Visits the portfolio", icon: User },
      { title: "GALLERY", sub: "Browses sketches and artwork", icon: Palette },
      { title: "ARTWORK", sub: "Views selected artwork", icon: Eye },
      { title: "COMMISSION", sub: "Requests a custom sketch", icon: FileText },
      { title: "CONTACT", sub: "Sends order/contact details", icon: Send },
    ],
  },
  {
    id: "land-records",
    name: "LAND RECORDS",
    badge: "Document OCR & Automated Verification",
    description:
      "An automated document digitization pipeline that processes scanned land records, extracts textual and numerical attributes via OCR, and validates entities for reliability.",
    nodes: [
      { title: "DOCUMENT", sub: "Upload scanned land record", icon: FileText },
      { title: "OCR", sub: "Extract text from the document", icon: ScanText },
      { title: "DATA EXTRACTION", sub: "Identify owner, survey number, area, etc.", icon: Filter },
      { title: "VALIDATION", sub: "Check extracted information", icon: CheckCircle2 },
      { title: "VERIFIED RECORD", sub: "Store structured land information", icon: Database },
    ],
  },
  {
    id: "land-acquisition",
    name: "LAND ACQUISITION",
    badge: "Predictive Analytics & Delay Modeling",
    description:
      "A machine learning platform designed to analyze multi-variable land acquisition datasets, model critical path risks, and predict project timeline delays for proactive governance.",
    nodes: [
      { title: "DATA", sub: "Collect land acquisition information", icon: Database },
      { title: "PREPROCESSING", sub: "Clean and prepare the data", icon: Filter },
      { title: "FEATURES", sub: "Identify important factors", icon: BarChart3 },
      { title: "ML MODEL", sub: "Train predictive model", icon: Cpu },
      { title: "PREDICTION", sub: "Analyze potential acquisition delays", icon: TrendingUp },
    ],
  },
  {
    id: "attendance-system",
    name: "ATTENDANCE SYSTEM",
    badge: "C++ Application & File Handling",
    description:
      "An efficient console-based architecture built with object-oriented C++ that records, updates, and persists student attendance directly via local file streams without external database dependencies.",
    nodes: [
      { title: "STUDENT", sub: "Select student", icon: User },
      { title: "INPUT", sub: "Mark attendance", icon: CheckSquare },
      { title: "RECORD", sub: "Update attendance", icon: FileText },
      { title: "FILE STORAGE", sub: "Save data using file handling", icon: Database },
      { title: "REPORT", sub: "View attendance information", icon: FileSpreadsheet },
    ],
  },
  {
    id: "loan-risk-analysis",
    name: "LOAN RISK ANALYSIS",
    badge: "Machine Learning & Credit Scoring",
    description:
      "A supervised machine learning classification pipeline that processes applicant financial profiles, handles data cleaning, engineers predictive features, and assesses default risk.",
    nodes: [
      { title: "DATA", sub: "Borrower and financial information", icon: DollarSign },
      { title: "PREPROCESSING", sub: "Clean missing and inconsistent data", icon: Filter },
      { title: "FEATURES", sub: "Prepare relevant financial features", icon: BarChart3 },
      { title: "ML MODEL", sub: "Train classification model", icon: Cpu },
      { title: "RISK RESULT", sub: "Predict loan risk", icon: ShieldAlert },
    ],
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    badge: "Full-Stack Web & Order Lifecycle",
    description:
      "A full-stack web architecture supporting responsive product catalog browsing, real-time cart state management, checkout request processing, and persistent database storage.",
    nodes: [
      { title: "USER", sub: "Opens the web application", icon: User },
      { title: "PRODUCTS", sub: "Browses available products", icon: ShoppingBag },
      { title: "CART", sub: "Adds selected products", icon: ShoppingCart },
      { title: "ORDER", sub: "Places an order", icon: CreditCard },
      { title: "DATABASE", sub: "Stores application data", icon: Database },
    ],
  },
];

export default function Architecture() {
  const [selectedPattern, setSelectedPattern] = useState<WorkflowPattern>(PROJECT_WORKFLOWS[0]);

  return (
    <section id="architecture" className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff2a3b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>PROJECT WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            HOW MY PROJECTS ACTUALLY WORK<span className="text-[#ff2a3b]">.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl font-sans">
            Simple step-by-step workflows showing how I turn real-world problems into working software and AI solutions.
          </p>
        </motion.div>

        {/* Tab Switcher - 6 Real Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {PROJECT_WORKFLOWS.map((arch) => {
            const isActive = arch.id === selectedPattern.id;
            return (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                key={arch.id}
                onClick={() => setSelectedPattern(arch)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? "bg-[#ff2a3b] text-white font-bold border-[#ff2a3b] shadow-lg shadow-[#ff2a3b]/30"
                    : "bg-[#12141f]/70 text-gray-400 border-white/10 hover:text-white hover:border-[#ff2a3b]/40"
                }`}
              >
                {arch.name}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Project Workflow Board */}
        <div className="crimson-glass-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden bg-[#0a0c12]/90 border border-[#ff2a3b]/20">
          {/* Top Bar Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff2a3b] mb-1 block font-bold">
                {selectedPattern.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                {selectedPattern.name}
              </h3>
            </div>
            <p className="text-xs text-gray-400 max-w-md font-sans leading-relaxed">
              {selectedPattern.description}
            </p>
          </div>

          {/* 5-Step Node Diagram Flow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPattern.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative"
            >
              {selectedPattern.nodes.map((node, idx) => {
                const IconComp = node.icon;
                const isLast = idx === selectedPattern.nodes.length - 1;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                    className="relative group"
                  >
                    {/* Node Card */}
                    <div className="p-5 rounded-2xl bg-[#0f111a] border border-[#ff2a3b]/20 group-hover:border-[#ff2a3b] shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                      {/* Ambient Glow on Hover */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff2a3b]/10 rounded-full blur-xl group-hover:bg-[#ff2a3b]/25 transition-all pointer-events-none" />

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono text-[#ff2a3b] uppercase font-bold tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-ping" />
                          STEP 0{idx + 1}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-[#ff2a3b]/10 text-[#ff2a3b] flex items-center justify-center group-hover:bg-[#ff2a3b] group-hover:text-white transition-colors duration-300">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#ff2a3b] transition-colors">
                          {node.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-sans leading-relaxed">
                          {node.sub}
                        </p>
                      </div>

                      {/* Bottom Accent Progress Bar */}
                      <div className="w-full h-0.5 bg-[#ff2a3b]/20 mt-4 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#ff2a3b] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                      </div>
                    </div>

                    {/* Step Connecting Arrow for Desktop */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#07080a] border border-[#ff2a3b]/40 text-[#ff2a3b] items-center justify-center shadow-md pointer-events-none">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
