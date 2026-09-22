import React from 'react';
import { Code2, Globe, Sparkles, CheckCircle2, Terminal, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </div>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Skills & Technologies
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="max-w-xl text-sm sm:text-base text-slate-400">
          Categorized as <span className="text-cyan-300 font-medium">foundational skills</span> representing my initial coursework, self-study, and practical beginner-level projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            id={`skill-category-${idx}`}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 shadow-xl backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300 group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400">
                    Foundational
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-mono font-medium ${skill.badgeColor}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-normal">
                      {skill.description}
                    </p>

                    {/* Simple badge status indicator instead of exaggerated percentage bars */}
                    <div className="mt-2.5 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        Foundational Knowledge
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        Active Learning
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest card footer */}
            <div className="mt-6 pt-4 border-t border-slate-800/50 text-[11px] text-slate-500 font-mono flex items-center justify-between">
              <span>Status:</span>
              <span className="text-cyan-400/90 font-sans font-medium">Practicing Basics</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
