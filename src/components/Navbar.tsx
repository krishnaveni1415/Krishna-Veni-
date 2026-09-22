import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenLinkedInNotice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLinkedInNotice }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'learning', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/70 shadow-lg shadow-black/25 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="nav-brand-link"
          href="#home"
          className="flex items-center gap-2 text-slate-100 font-bold tracking-tight text-lg group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono text-sm font-semibold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="leading-tight text-slate-100 font-semibold tracking-wide flex items-center gap-1.5">
              Krishnaveni
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-slate-400 font-normal tracking-wide">
              First-Year CS Student
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Social Links on the Right */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub link */}
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="Visit Krishnaveni's GitHub Profile"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn placeholder as requested */}
          <button
            id="nav-linkedin-placeholder-btn"
            type="button"
            onClick={onOpenLinkedInNotice}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-900/40 hover:bg-slate-900/80 border border-dashed border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-all hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 group"
            title="LinkedIn profile not provided yet"
          >
            <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200">
              {PERSONAL_INFO.linkedinPlaceholder}
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-300 bg-cyan-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              id="mobile-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (krishnaveni1415)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              id="mobile-linkedin-placeholder-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLinkedInNotice();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-medium text-slate-400 bg-slate-900/50 border border-dashed border-slate-700 rounded-lg hover:text-slate-200 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-slate-500" />
              <span className="font-mono text-[11px]">{PERSONAL_INFO.linkedinPlaceholder}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
