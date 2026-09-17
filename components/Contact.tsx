"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Send, MapPin, Loader2, AlertCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d84cad20-12fa-4f24-9722-398fe26b1e24",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Nikhil Appari Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please check your connection or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10 scroll-mt-16 sm:scroll-mt-20">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#ff2a3b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Links */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05] uppercase">
              LET'S BUILD <br />
              <span className="text-[#ff2a3b] underline decoration-[#ff2a3b]/30">SOMETHING TOGETHER</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed font-sans">
              I'm an AI & ML student who enjoys turning ideas into practical software and AI solutions. I'm open to internships, collaborations, hackathons, and exciting project opportunities.
            </p>

            {/* Large CTA Banner */}
            <div className="pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="crimson-btn inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-base sm:text-lg font-black tracking-wider uppercase shadow-2xl group transition-all duration-300"
              >
                <span>LET'S CONNECT</span>
                <Mail className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-4 pt-4">
              {/* Copy Email Button & Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#12141f]/80 text-gray-200 hover:text-white border border-[#ff2a3b]/30 text-xs font-mono transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#ff2a3b]" />}
                  <span>{copied ? "Copied to Clipboard!" : PERSONAL_INFO.email}</span>
                </button>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#12141f]/80 text-gray-200 hover:text-white border border-[#ff2a3b]/30 text-xs font-mono transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#12141f]/80 text-gray-200 hover:text-white border border-[#ff2a3b]/30 text-xs font-mono transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#ff2a3b]" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Clean Crimson Glass Contact Form */}
          <div className="lg:col-span-6">
            <div className="crimson-glass-card p-8 sm:p-10 rounded-3xl border border-[#ff2a3b]/20 shadow-2xl bg-[#0a0c12]/90">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#ff2a3b]/20 border border-[#ff2a3b] flex items-center justify-center mx-auto text-[#ff2a3b]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Message Sent!</h3>
                  <p className="text-sm text-gray-300 max-w-xs mx-auto font-sans">
                    Thank you for reaching out, {formData.name}. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-[#ff2a3b] hover:underline pt-4 block mx-auto font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest mb-2 font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0f111a] border border-[#ff2a3b]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff2a3b] text-sm font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest mb-2 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0f111a] border border-[#ff2a3b]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff2a3b] text-sm font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest mb-2 font-bold">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project details or inquiry..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0f111a] border border-[#ff2a3b]/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff2a3b] text-sm font-sans resize-none transition-colors"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="crimson-btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-black text-sm tracking-wider uppercase transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
