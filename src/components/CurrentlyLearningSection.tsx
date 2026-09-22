import React from 'react';
import { Terminal, Binary, Layout, Cpu, Sparkles, BrainCircuit, BookOpen, ArrowUpRight } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../data/portfolioData';

export const CurrentlyLearningSection: React.FC = () => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Active Studies</span>
        </div>
        <h2 id="currently-learning-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Currently Learning
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-4" />
        <p className="max-w-xl text-sm sm:text-base text-slate-400">
          Topics I am actively studying through coursework, coding practice, and online resources. These represent active exploration and foundational learning, not claimed advanced mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CURRENTLY_LEARNING.map((topic, idx) => (
          <div
            key={idx}
            id={`learning-card-${idx}`}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 sm:p-6 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getTopicIcon(topic.iconName)}
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {topic.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {topic.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {topic.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <span className="text-cyan-400 font-medium flex items-center gap-1 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {topic.status}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                1st Year Focus
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
