import React, { useState } from 'react';
import { Terminal, FolderGit2, Play, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Practical Work</span>
        </div>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Projects
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-4" />
        <p className="max-w-xl text-sm sm:text-base text-slate-400">
          Foundational software projects built to practice programming fundamentals, conditional branching, user input validation, and problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-7 shadow-xl backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-cyan-950/20 transition-all duration-300 group"
          >
            <div>
              {/* Card Header with Tech Badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 font-mono font-medium">
                    {project.technology}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Concepts Practiced */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 block font-semibold">
                  Concepts Practiced:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.conceptsPracticed.map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-950/70 border border-slate-800/70 text-slate-300 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: View Project Button */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <button
                id={`btn-view-project-${project.id}`}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Project & Run Demo</span>
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono"
                title="View code on Krishnaveni's GitHub"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed code & live console runner */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
