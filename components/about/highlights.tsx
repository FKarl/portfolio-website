'use client';

import { Brain, Code, FlaskConical, Sparkles } from 'lucide-react';
import { HighlightCard } from './highlight-card';

const highlights = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Specializing in neural networks and natural language processing',
  },
  {
    icon: FlaskConical,
    title: 'Research',
    description: 'Publishing peer-reviewed papers in top-tier conferences',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Building scalable solutions with modern technologies',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Bridging the gap between research and practical applications',
  },
] as const;

export function Highlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {highlights.map((item, index) => (
        <HighlightCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
}
