import React from 'react';
import { ArrowDown, Github, Terminal, Sparkles, Code, Cpu } from 'lucide-react';
import { AiNetworkCanvas } from './AiNetworkCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background canvas for neural network / technology graphic */}
      <AiNetworkCanvas />

      {/* Subtle radial glow accents (not distracting, matching theme) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-900/20 via-cyan-900/15 to-purple-900/10 blur-[110px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Status pill indicating honest student status */}
        <div
          id="hero-student-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-cyan-500/30 text-xs text-slate-300 mb-6 shadow-sm shadow-cyan-950/40 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-medium text-cyan-200">First-Year B.Tech Student</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Foundational Learning Journey</span>
        </div>

        {/* Name Display */}
        <h1
          id="hero-name"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3 font-sans"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            KRISHNAVENI
          </span>
        </h1>

        {/* Role Subtitle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h2
            id="hero-role-title"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400"
          >
            {PERSONAL_INFO.role}
          </h2>
          <Sparkles className="w-5 h-5 text-indigo-400" />
        </div>

        {/* Short introduction */}
        <p
          id="hero-intro-text"
          className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-9 font-normal"
        >
          {PERSONAL_INFO.intro}
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#090d16]"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 text-cyan-100" />
          </a>

          <a
            id="hero-github-profile-btn"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#090d16]"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Minimal Code & Tech Visualization card */}
        <div
          id="hero-code-preview"
          className="w-full max-w-xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800/80 p-4 text-left shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-slate-700/80 transition-colors"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-slate-400 flex items-center gap-1 ml-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                student_profile.py
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Python 3.x</span>
          </div>

          <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto selection:bg-cyan-500/30">
            <code>
              <span className="text-purple-400">class</span> <span className="text-yellow-300">Student</span>:
              {'\n'}    <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):
              {'\n'}        self.name = <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>
              {'\n'}        self.degree = <span className="text-emerald-300">"B.Tech CSE (1st Year)"</span>
              {'\n'}        self.focus = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Web"</span>, <span className="text-emerald-300">"AI"</span>]
              {'\n'}        self.goal = <span className="text-emerald-300">"{PERSONAL_INFO.careerGoal}"</span>
            </code>
          </pre>

          <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400/90 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>&gt; Actively building foundational projects</span>
            </div>
            <span className="hidden sm:inline text-slate-500">Honest & Authentic</span>
          </div>
        </div>
      </div>
    </section>
  );
};
