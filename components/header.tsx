'use client';

import { Download, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Header() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="absolute inset-0 -z-10 catppuccin-grid opacity-50"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-32 h-32 md:w-40 md:h-40 lg:h-48 lg:w-48 mb-8 group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow -z-10 group-hover:from-accent group-hover:via-primary group-hover:to-secondary blur-md opacity-50"></div>
        <img
          src="/assets/hero/avatar.jpg"
          alt="Fabian Karl"
          className="rounded-full shadow-lg border-4 border-background relative z-10 w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
      >
        Fabian Karl
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <p className="text-xl md:text-2xl text-foreground">Data Scientist</p>
        <div className="flex gap-2 text-muted-foreground">
          <span>Researcher</span>
          <span>•</span>
          <span>ML Engineer</span>
          <span>•</span>
          <span>PhD Student</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <Button
          size="lg"
          className="gap-2 bg-primary hover:bg-primary/90"
          asChild
        >
          <a href="/resources/CV_Fabian_Karl.pdf" download>
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="group border-primary hover:bg-primary/10"
        >
          <a
            href="https://github.com/FKarl"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            GitHub
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="group border-primary hover:bg-primary/10"
        >
          <a
            href="https://www.linkedin.com/in/FKarl"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            LinkedIn
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={scrollToNextSection}
        >
          <span className="sr-only">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Button>
      </motion.div>
    </motion.header>
  );
}
