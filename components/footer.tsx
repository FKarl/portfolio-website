'use client';

import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { XIcon } from './ui/XIcon';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { id: 'nav-about', name: 'About', href: '#about' },
      { id: 'nav-timeline', name: 'Timeline', href: '#timeline' },
      { id: 'nav-publications', name: 'Publications', href: '#publications' },
      { id: 'nav-projects', name: 'Projects', href: '#projects' },
      { id: 'nav-skills', name: 'Skills', href: '#skills' },
      { id: 'nav-contact', name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Research',
    links: [
      {
        id: 'research-scholar',
        name: 'Google Scholar',
        href: 'https://scholar.google.com/citations?hl=en&user=Pv9PEEQAAAAJ',
      },
      {
        id: 'research-orcid',
        name: 'ORCID',
        href: 'https://orcid.org/0009-0008-0079-5604',
      },
      {
        id: 'research-gate',
        name: 'ResearchGate',
        href: 'https://www.researchgate.net/profile/Fabian-Karl-2',
      },
      {
        id: 'research-dblp',
        name: 'DBLP',
        href: 'https://dblp.uni-trier.de/pid/239/6427-1.html',
      },
    ],
  },
] as const;

const socialLinks = [
  {
    id: 'social-github',
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/FKarl',
  },
  {
    id: 'social-linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/FKarl',
  },
  {
    id: 'social-twitter',
    name: 'Twitter',
    icon: XIcon,
    href: 'https://twitter.com/FabiKarl',
  },
  {
    id: 'social-email',
    name: 'Email',
    icon: Mail,
    href: 'mailto:fabian.karl@uni-ulm.de',
  },
  {
    id: 'social-scholar',
    name: 'DBLP',
    icon: BookOpen,
    href: 'https://dblp.uni-trier.de/pid/239/6427-1.html',
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Fabian Karl</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Data Scientist and ML Engineer based in Ulm, Germany. Currently
              pursuing a Ph.D., focusing on machine learning research and
              development of innovative AI solutions.
            </p>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * sectionIndex }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      target={link.href.startsWith('#') ? undefined : '_blank'}
                      rel={
                        link.href.startsWith('#')
                          ? undefined
                          : 'noopener noreferrer'
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Fabian Karl. All rights reserved.
          </p>

          <div className="flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.id} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel={
                      link.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
