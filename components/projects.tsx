'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  images?: ProjectImage[];
  github?: string;
  demo?: string;
  paper?: string;
  docs?: string;
}

const projects: Project[] = [
  {
    title: 'Evaluation of German party manifestos',
    description:
      'This project analyzes major German political parties through their manifestos using semi-automatic methods. We applied LDA, HDP, and BERT for topic extraction and categorization, summarizing key themes from each category. An interactive demo allows users to rank these summaries and receive scores for each party, offering insights into their political positions.',
    tags: ['NLP', 'PyTorch'],
    images: [
      {
        url: '/assets/projects/tadl/p1.png',
        alt: 'UI',
      },
      {
        url: '/assets/projects/tadl/p2.png',
        alt: 'UI',
      },
    ],
    github: 'https://github.com/FKarl/Text-Analysis-of-Party-Programs',
    demo: 'https://www.tadl.fkarl.de/',
  },
  {
    title:
      'Efficient Inferencing in Language Models for Academic Writing Feedback',
    description:
      'This project fine-tunes language models for academic writing, specifically focusing on cite-worthiness detection and section classification. We optimize these models for fast inference using techniques like distillation, pruning, and quantization, evaluating their performance on server CPUs, notebook CPUs, and System on Chip (SoC) devices.',
    tags: ['NLP', 'SLM', 'PyTorch'],
    images: [
      {
        url: '/assets/projects/eff_inference/p1.png',
        alt: 'Pareto frontier',
      },
      {
        url: '/assets/projects/eff_inference/p2.png',
        alt: 'Upset plot',
      },
      {
        url: '/assets/projects/eff_inference/p3.png',
        alt: 'Truncation',
      },
    ],
    github: 'https://github.com/FKarl/Efficient-Inferencing',
  },
  {
    title: 'Graph-MLP Sampling',
    description:
      'This projects examines the impact of different graph sampling strategies on the performance of GraphMLP. We evaluate thirteen sampling methods across six benchmark datasets, analyzing their accuracy and runtime. Our findings reveal significant variations in performance among the sampling strategies, indicating that no single method is optimal for all datasets. We advocate for treating graph sampling as a hyperparameter that should be tailored to the specific requirements of each task.',
    tags: ['Graph-ML', 'PyTorch'],
    images: [
      {
        url: '/assets/projects/Graph-MLP/p1.png',
        alt: 'Graph-MLP',
      },
    ],
    github: 'https://github.com/FKarl/Graph-MLP-Sampling',
    paper:
      'https://github.com/FKarl/Graph-MLP-Sampling/blob/master/Graph_MLP_Sampling.pdf',
  },
];

function ProjectImageCarousel({ images }: { images: ProjectImage[] }) {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + images.length) % images.length;
    setPage([newIndex, newDirection]);
  };

  if (!images?.length) return null;

  return (
    <div className="relative group mb-4 rounded-lg overflow-hidden">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
            onClick={(e) => {
              e.preventDefault();
              paginate(-1);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
            onClick={(e) => {
              e.preventDefault();
              paginate(1);
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={cn(
                  'w-2 h-2 rounded-full bg-background/80 hover:bg-background transition-colors',
                  index === currentIndex && 'bg-background'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const newDirection = index > currentIndex ? 1 : -1;
                  setPage([index, newDirection]);
                }}
              >
                <span className="sr-only">Go to image {index + 1}</span>
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Research Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                {project.images && (
                  <ProjectImageCarousel images={project.images} />
                )}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {project.docs && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
