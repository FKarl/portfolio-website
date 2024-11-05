'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';
import { XIcon } from './ui/XIcon';
import { Button } from './ui/button';

const socialLinks = [
  {
    id: 'email',
    name: 'Email',
    icon: Mail,
    href: 'mailto:fabian.karl@uni-ulm.de',
    description: 'Send me an email',
    color: 'bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/FKarl',
    description: 'Connect with me on LinkedIn',
    color:
      'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/FKarl',
    description: 'Check out my code',
    color:
      'bg-gray-500/10 hover:bg-gray-500/20 text-gray-600 dark:text-gray-400',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: XIcon,
    href: 'https://twitter.com/FabiKarl',
    description: 'Follow me on Twitter',
    color: 'bg-black/10 hover:bg-black/20 text-black dark:text-white',
  },
  {
    id: 'scholar',
    name: 'DBLP',
    icon: BookOpen,
    href: 'https://dblp.uni-trier.de/pid/239/6427-1.html',
    description: 'View my publications',
    color:
      'bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400',
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or interested in collaboration? Feel free to reach
            out through any of these platforms!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => {
                // Calculate the delay based on the visual position in the grid
                const row = Math.floor(index / 3);
                const col = index % 3;
                const delay = (row * 3 + col) * 0.1;

                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay }}
                    viewport={{ once: true }}
                    className={`${
                      // Center the last item if it would be alone in its row
                      index === socialLinks.length - 1 &&
                      socialLinks.length % 2 !== 0
                        ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2'
                        : ''
                    }`}
                  >
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
                      className="block h-full"
                    >
                      <Button
                        variant="ghost"
                        className={`w-full h-full justify-start gap-4 p-4 ${link.color} transition-colors duration-200`}
                      >
                        <link.icon className="w-5 h-5 shrink-0" />
                        <div className="flex flex-col items-start">
                          <span className="font-semibold">{link.name}</span>
                          <span className="text-sm opacity-80">
                            {link.description}
                          </span>
                        </div>
                      </Button>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
