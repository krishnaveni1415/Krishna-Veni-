import React, { useState } from 'react';
import { Github, Linkedin, Mail, MessageSquare, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenLinkedInNotice: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLinkedInNotice }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let's Connect
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-4" />
        <p id="contact-text" className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
          I am currently learning, building, and exploring the world of technology. Feel free to connect with me and follow my journey.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-cyan-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          {/* Action buttons: GitHub and LinkedIn Placeholder */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
            {/* GitHub button */}
            <a
              id="contact-github-btn"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Github className="w-4 h-4 text-slate-200" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* LinkedIn Placeholder button */}
            <button
              id="contact-linkedin-placeholder-btn"
              type="button"
              onClick={onOpenLinkedInNotice}
              className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white font-mono text-xs border border-dashed border-slate-700 hover:border-cyan-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-500 group"
              title="LinkedIn profile not provided yet"
            >
              <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span>{PERSONAL_INFO.linkedinPlaceholder}</span>
            </button>
          </div>

          {/* Email Connection Card */}
          <div className="w-full max-w-lg p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Student Email</span>
                <span className="text-sm font-mono text-slate-200">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors text-center"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors flex items-center gap-1.5"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 max-w-sm">
            Feel free to reach out for student discussions, peer learning, or project feedback.
          </p>
        </div>
      </div>
    </section>
  );
};
