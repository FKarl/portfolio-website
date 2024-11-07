"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { ExternalLink, BookOpen, Users } from "lucide-react"
import { Button } from "./ui/button"
import type { Publication } from "@/lib/types/publication"

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export function PublicationCard({ publication, index }: PublicationCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-4">{publication.title}</h3>
            
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {publication.venue}, {publication.year}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {publication.authors.join(", ")}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {publication.type === 'inproceedings' ? 'Conference' : 
                   publication.type === 'article' ? 'Journal' : 
                   publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                </Badge>
                {publication.manual && (
                  <Badge variant="secondary" className="bg-primary/20">
                    Manual Entry
                  </Badge>
                )}
                {publication.add_tag && (
                    <Badge variant="secondary" className="bg-primary/20" >{publication.add_tag}</Badge>
                )}
                {publication.doi && (
                  <Badge variant="outline">DOI: {publication.doi}</Badge>
                )}
              </div>
              
              {publication.url && (
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={publication.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}