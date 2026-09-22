import React from 'react';
import { Milestone, CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/portfolioData';

export const LearningJourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-3">
          <Milestone className="w-3.5 h-3.5" />
          <span>Growth Path</span>
        </div>
        <h2 id="journey-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          My Learning Journey
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="max-w-xl text-sm sm:text-base text-slate-400">
          A step-by-step roadmap showing where I started, what I am currently practicing, and my long-term path toward Artificial Intelligence.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 md:pl-0">
        {/* Central timeline spine for md+ screens */}
        <div
          className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/40"
          aria-hidden="true"
        />

        {/* Mobile vertical line */}
        <div
          className="md:hidden absolute left-3 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/40"
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-10">
          {TIMELINE_STEPS.map((item, idx) => {
            const isEven = idx % 2 === 0;

            const getStatusBadge = () => {
              if (item.status === 'completed') {
                return (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Completed
                  </span>
                );
              }
              if (item.status === 'in-progress') {
                return (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <Clock className="w-3 h-3 animate-spin" /> In Progress
                  </span>
                );
              }
              return (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  <Target className="w-3 h-3" /> Target Goal
                </span>
              );
            };

            return (
              <div
                key={item.step}
                id={`timeline-step-${item.step}`}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-[-24px] sm:left-[-28px] md:left-1/2 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-300 font-mono text-xs font-bold shadow-md shadow-cyan-500/20">
                  {item.step}
                </div>

                {/* Content Box */}
                <div className="w-full md:w-[46%] ml-3 sm:ml-4 md:ml-0">
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 shadow-xl backdrop-blur-sm hover:border-slate-700/80 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                        Step {item.step}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {item.tag}
                        </span>
                        {getStatusBadge()}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
