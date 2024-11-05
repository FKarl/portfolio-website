"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Bio } from "./bio"
import { Highlights } from "./highlights"
import { Quote } from "./quote"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <Card className="p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Bio />
            <Highlights />
            <Quote />
          </motion.div>
        </Card>
      </motion.div>
    </section>
  )
}