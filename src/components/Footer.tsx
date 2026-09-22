import React from 'react';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenLinkedInNotice: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLinkedInNotice }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-[#060911] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Title and Tagline */}
        <div className="space-y-2">
          <h3 id="footer-identity" className="text-base sm:text-lg font-bold text-white tracking-wide">
            Krishnaveni | Aspiring AI Engineer
          </h3>
          <p id="footer-quote" className="text-xs sm:text-sm text-cyan-300 font-medium italic">
            "Building my skills, one project at a time."
          </p>
        </div>

        {/* Links: GitHub and LinkedIn Placeholder */}
        <div className="flex items-center gap-4">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span>GitHub Profile</span>
          </a>

          <button
            id="footer-linkedin-btn"
            type="button"
            onClick={onOpenLinkedInNotice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-dashed border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-colors font-mono"
            title="LinkedIn profile not provided yet"
          >
            <Linkedin className="w-4 h-4 text-slate-500" />
            <span>{PERSONAL_INFO.linkedinPlaceholder}</span>
          </button>
        </div>

        {/* Back to top button */}
        <button
          id="footer-back-to-top-btn"
          type="button"
          onClick={scrollToTop}
          className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all text-xs flex items-center gap-1.5"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="text-[11px]">Back to top</span>
        </button>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-slate-900/80 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p id="footer-copyright">
            © 2026 Krishnaveni. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-600">
            First-Year B.Tech Computer Science Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
