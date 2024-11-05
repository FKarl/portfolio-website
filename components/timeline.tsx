"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Calendar } from "lucide-react"

const timelineItems = [
  {
    year: "2024",
    title: "Ph.D. Research in Natural Language Processing",
    description: "Began doctoral research at Ulm University, focusing on advanced Natural Language Processing techniques to enhance machine understanding and generation of human language.",
    icon: Calendar
  },
  {
    year: "2024",
    title: "Master's Degree in Computer Science",
    description: "Graduated with an MSc in Computer Science (Grade: 1.2), with a thesis titled \"Retrieval Augmented Information Extraction: Enhancing Language Models for Extracting Bibliographic Metadata from Heterogeneous Web Sources with CRAWLDoc\".",
    icon: Calendar
  },
  {
    year: "2022",
    title: "Student Research Assistant in Data Science",
    description: "Contributed to research projects in the fields of Natural Language Processing and language models while pursuing my Master's degree, co-authoring papers on topics like transformer-based models and text classification.",
    icon: Calendar
  },
  {
    year: "2022",
    title: "Bachelor's Degree in Computer Science",
    description: "Completed a Bachelor's degree in Computer Science (Grade: 1.3), with a thesis titled \"Transformers are Short Text Classiﬁers: A Study of Inductive Short Text Classiﬁers on Benchmarks and Real-world Datasets\".",
    icon: Calendar
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Academic Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div 
            className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            style={{ marginTop: "24px" }}
          />

          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Center marker with animated ring */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:scale-125 transition-transform duration-300" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center z-10 shadow-lg border-4 border-background relative">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                      {/* Connector lines */}
                      <div 
                        className={`absolute top-1/2 h-0.5 from-primary/50 to-transparent
                          ${index % 2 === 0 
                            ? 'bg-gradient-to-l right-full w-[calc(24rem-6px)]' 
                            : 'bg-gradient-to-r left-full w-[calc(24rem-6px)]'
                          }
                          hidden md:block
                        `}
                      />
                    </div>
                  </div>
                  <div className="mt-2 px-4 py-1 rounded-full bg-muted shadow-sm border">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <h3 className="font-bold text-xl mb-3 text-foreground/90">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}