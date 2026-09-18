"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink, RefreshCw, Code } from "lucide-react";
import { GitHubRepo, getFallbackRepos } from "@/lib/github";
import { PERSONAL_INFO } from "@/data/portfolioData";

const CATEGORIES = ["All", "AI", "Python", "RAG", "Agents", "Security", "Web"];

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const loadRepos = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/github");
      const data = await res.json();
      if (data.success && Array.isArray(data.repos) && data.repos.length > 0) {
        setRepos(data.repos);
      } else {
        setRepos(getFallbackRepos());
      }
    } catch (err) {
      console.error(err);
      setRepos(getFallbackRepos());
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    if (activeFilter === "All") return true;
    return repo.category === activeFilter;
  });

  return (
    <section className="relative py-24 sm:py-32 bg-[#07080a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a3b]/10 border border-[#ff2a3b]/20 text-[#ff2a3b] text-xs font-mono tracking-widest uppercase mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Live GitHub Sync</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Public Repositories<span className="text-[#ff2a3b]">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadRepos}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12141f] hover:bg-[#ff2a3b] text-xs font-mono text-gray-200 hover:text-white border border-white/10 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#ff2a3b] ${loading ? "animate-spin" : ""}`} />
              <span>Sync GitHub</span>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff2a3b]/10 text-[#ff2a3b] text-xs font-mono border border-[#ff2a3b]/30 hover:bg-[#ff2a3b] hover:text-white transition-colors"
            >
              <span>@{PERSONAL_INFO.githubUsername}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-[#ff2a3b] text-white font-bold shadow-lg shadow-[#ff2a3b]/30"
                    : "bg-[#12141f]/80 text-gray-400 border border-white/10 hover:text-white hover:border-[#ff2a3b]/30"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-44 rounded-2xl bg-[#0d0f17] border border-[#ff2a3b]/10 animate-pulse p-6"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="crimson-glass-card group p-6 rounded-2xl border border-[#ff2a3b]/20 hover:border-[#ff2a3b] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#ff2a3b] font-bold truncate max-w-[200px]">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#ff2a3b] transition-colors flex-shrink-0" />
                  </div>

                  <p className="text-xs text-gray-300 line-clamp-3 mb-4 leading-relaxed font-sans">
                    {repo.description || "No description provided."}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-[#ff2a3b]" />
                    {repo.language || "Python"}
                  </span>

                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-[#ff2a3b]" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
