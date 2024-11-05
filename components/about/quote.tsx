'use client';

import { motion } from 'framer-motion';

export function Quote() {
  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground italic"
      >
        "Our work in AI is as much about solving problems as it is about
        inventing the tools to solve them. Practical applications drive the
        necessity for better algorithms."
      </motion.p>
    </>
  );
}
