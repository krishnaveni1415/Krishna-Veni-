import React from 'react';
import { X, Linkedin, Github, ExternalLink, Info } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LinkedInNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkedInNoticeModal: React.FC<LinkedInNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="linkedin-notice-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="linkedin-notice-dialog"
        className="relative w-full max-w-md bg-[#0b101d] border border-slate-700 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
            <Linkedin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              LinkedIn Profile Placeholder
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              {PERSONAL_INFO.linkedinPlaceholder}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          <p>
            Krishnaveni's LinkedIn profile URL has not been provided yet.
          </p>
          <p className="text-slate-400 text-xs">
            As a first-year B.Tech student, she is currently establishing her foundational coursework, technical competencies, and project repositories.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Instead</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
