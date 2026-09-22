import React, { useState } from 'react';
import { X, Play, Copy, Check, Terminal, ExternalLink, Code2, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'interactive' | 'code'>('interactive');
  const [copied, setCopied] = useState(false);

  // State for interactive simulation
  // Grade Calculator state
  const [gradeInput, setGradeInput] = useState('85');
  const [gradeOutput, setGradeOutput] = useState<string | null>(null);

  // Voting Calculator state
  const [votingInput, setVotingInput] = useState('19');
  const [votingOutput, setVotingOutput] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runGradeSimulation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const marks = parseFloat(gradeInput);

    if (isNaN(marks)) {
      setGradeOutput('Error: Please enter a valid numerical score.');
      return;
    }

    if (marks < 0 || marks > 100) {
      setGradeOutput('Invalid marks! Please enter a score between 0 and 100.');
    } else if (marks >= 90) {
      setGradeOutput('>>> Grade A+ (Outstanding Performance)');
    } else if (marks >= 80) {
      setGradeOutput('>>> Grade A (Excellent)');
    } else if (marks >= 70) {
      setGradeOutput('>>> Grade B (Good)');
    } else if (marks >= 60) {
      setGradeOutput('>>> Grade C (Satisfactory)');
    } else if (marks >= 50) {
      setGradeOutput('>>> Grade D (Pass)');
    } else {
      setGradeOutput('>>> Grade F (Needs Improvement)');
    }
  };

  const runVotingSimulation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const age = parseInt(votingInput, 10);
    const VOTING_AGE = 18;

    if (isNaN(age)) {
      setVotingOutput('Error: Please enter a valid integer for age.');
      return;
    }

    if (age < 0 || age > 120) {
      setVotingOutput('Invalid age provided (must be between 0 and 120).');
    } else if (age >= VOTING_AGE) {
      setVotingOutput(`>>> Eligible to vote! You are ${age} years old.`);
    } else {
      const yearsLeft = VOTING_AGE - age;
      setVotingOutput(`>>> Not eligible yet. You have ${yearsLeft} more year(s) until eligible.`);
    }
  };

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0b101d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-project-title" className="text-lg font-bold text-white leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {project.technology}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <button
            id="modal-close-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with scrollable content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Project Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Concepts Practiced */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Foundational Concepts Practiced
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.conceptsPracticed.map((concept, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs: Interactive Simulation vs Source Code */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('interactive')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'interactive'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Interactive Runner</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'code'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Python Source Code</span>
                </button>
              </div>

              {activeTab === 'code' && (
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
                  title="Copy Python Code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Tab 1: Interactive Runner */}
            {activeTab === 'interactive' && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/70">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-4 h-4" />
                    Interactive Console Simulator
                  </span>
                  <span className="text-[10px] text-slate-500">Pure Python Logic</span>
                </div>

                {project.interactiveType === 'grade' ? (
                  <form onSubmit={runGradeSimulation} className="space-y-3">
                    <div className="space-y-1.5">
                      <label htmlFor="modal-grade-input" className="block text-slate-300">
                        Enter Student Marks (0 - 100):
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="modal-grade-input"
                          type="number"
                          min="0"
                          max="100"
                          value={gradeInput}
                          onChange={(e) => setGradeInput(e.target.value)}
                          placeholder="e.g. 85"
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono text-xs"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-cyan-400"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Run</span>
                        </button>
                      </div>
                    </div>

                    {gradeOutput && (
                      <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 animate-in fade-in duration-150">
                        <span className="text-[10px] text-slate-400 block mb-1">Terminal Output:</span>
                        <div className="font-semibold">{gradeOutput}</div>
                      </div>
                    )}
                  </form>
                ) : (
                  <form onSubmit={runVotingSimulation} className="space-y-3">
                    <div className="space-y-1.5">
                      <label htmlFor="modal-voting-input" className="block text-slate-300">
                        Enter Person's Age:
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="modal-voting-input"
                          type="number"
                          min="0"
                          max="120"
                          value={votingInput}
                          onChange={(e) => setVotingInput(e.target.value)}
                          placeholder="e.g. 19"
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono text-xs"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold flex items-center gap-1.5 transition-colors focus:ring-2 focus:ring-cyan-400"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Run</span>
                        </button>
                      </div>
                    </div>

                    {votingOutput && (
                      <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 animate-in fade-in duration-150">
                        <span className="text-[10px] text-slate-400 block mb-1">Terminal Output:</span>
                        <div className="font-semibold">{votingOutput}</div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            )}

            {/* Tab 2: Python Source Code */}
            {activeTab === 'code' && (
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto max-h-64">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/40 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Authored by Krishnaveni (First-Year Student Project)</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <span>GitHub Repos</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
