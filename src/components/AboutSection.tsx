import React from 'react';
import { User, GraduationCap, Target, BookOpen, Layers, Sparkles, Code2, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-3">
          <User className="w-3.5 h-3.5" />
          <span>Student Background</span>
        </div>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Text & Student philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Beginning My Journey in Computer Science</span>
            </h3>

            <p id="about-content-p1" className="text-slate-300 text-base leading-relaxed">
              {PERSONAL_INFO.aboutText1}
            </p>

            <p id="about-content-p2" className="text-slate-300 text-base leading-relaxed">
              {PERSONAL_INFO.aboutText2}
            </p>
          </div>

          {/* Student/AI themed visual highlight card */}
          <div
            id="student-ai-visual-card"
            className="rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900/60 border border-cyan-500/25 p-4 sm:p-5 mt-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                  <span>Student Perspective & Continuous Practice</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono">
                    First-Year
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Focusing on core conceptual understanding rather than rushed complexity. Dedicated to writing clean, readable code and understanding fundamentals before moving into advanced architectures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Information Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div
            id="about-info-card"
            className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 shadow-xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Subtle glow border accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Student Profile</h3>
                  <p className="text-xs text-slate-400">Academic & Career Details</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                B.Tech CSE
              </span>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <User className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Name</span>
                  <span className="text-sm font-semibold text-slate-100">{PERSONAL_INFO.name}</span>
                </div>
              </div>

              {/* Degree */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <GraduationCap className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Degree</span>
                  <span className="text-sm font-semibold text-slate-100">{PERSONAL_INFO.degree}</span>
                </div>
              </div>

              {/* Current Level */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <Layers className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Current Level</span>
                  <span className="text-sm font-semibold text-slate-100">{PERSONAL_INFO.currentLevel}</span>
                </div>
              </div>

              {/* Career Goal */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <Target className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Career Goal</span>
                  <span className="text-sm font-semibold text-emerald-300">{PERSONAL_INFO.careerGoal}</span>
                </div>
              </div>

              {/* Learning Focus */}
              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Learning Focus</span>
                  <span className="text-sm font-semibold text-slate-100">{PERSONAL_INFO.learningFocus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
