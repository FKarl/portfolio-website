"use client"

import { calculateYears } from "@/lib/utils"

export function Bio() {
  const codingYears = calculateYears(new Date(2016, 8, 1))
  const age = calculateYears(new Date(2000, 5, 3))

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-4 text-lg">
        <p className="text-muted-foreground leading-relaxed">
          I'm a {age}-year-old Data Scientist and PhD student based in Ulm, Germany, with {codingYears} years 
          of programming experience. My journey in technology began in 2016, and since then, I've been passionate 
          about developing innovative solutions using machine learning and artificial intelligence.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Currently, I'm focused on advancing the field of machine learning through my research, 
          particularly in areas like natural language processing and deep learning. I combine 
          theoretical knowledge with practical implementations to create impactful solutions 
          that bridge the gap between academic research and real-world applications.
        </p>
      </div>
    </div>
  )
}