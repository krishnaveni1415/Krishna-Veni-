import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LinkedInNoticeModal } from './components/LinkedInNoticeModal';

export default function App() {
  const [linkedInNoticeOpen, setLinkedInNoticeOpen] = useState(false);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#080c15] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle background ambient gradients */}
      <div
        className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Navbar onOpenLinkedInNotice={() => setLinkedInNoticeOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Learning Journey Timeline */}
        <LearningJourneySection />

        {/* Currently Learning Section */}
        <CurrentlyLearningSection />

        {/* Contact Section */}
        <ContactSection onOpenLinkedInNotice={() => setLinkedInNoticeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenLinkedInNotice={() => setLinkedInNoticeOpen(true)} />

      {/* LinkedIn Placeholder Notice Dialog */}
      <LinkedInNoticeModal
        isOpen={linkedInNoticeOpen}
        onClose={() => setLinkedInNoticeOpen(false)}
      />
    </div>
  );
}
