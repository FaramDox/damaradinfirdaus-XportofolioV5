import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import LeftSocialRail from './components/LeftSocialRail.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import CertificatesSection from './components/CertificatesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-[#f8fafc] dark:bg-[#0d0d0d] text-zinc-700 dark:text-zinc-300 font-sans antialiased relative selection:bg-lime-400 selection:text-black overflow-x-hidden min-h-screen transition-colors duration-300">
        <AnimatedBackground />
        <LeftSocialRail />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <Reveal><AboutSection /></Reveal>
          <Reveal><SkillsSection /></Reveal>
          <Reveal><ProjectsSection /></Reveal>
          <Reveal><ExperienceSection /></Reveal>
          <Reveal><CertificatesSection /></Reveal>
          <Reveal><TestimonialsSection /></Reveal>
          <Reveal><ContactSection /></Reveal>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
