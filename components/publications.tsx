"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PublicationCard } from "./publication-card"
import { getPublications } from "@/lib/api/publications"
import type { Publication } from "@/lib/types/publication"
import { Skeleton } from "./ui/skeleton"
import { Button } from "./ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const INITIAL_DISPLAY_COUNT = 3;

export function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const data = await getPublications();
        setPublications(data);
      } catch (err) {
        setError('Failed to load publications');
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();
  }, []);

  const displayedPublications = showAll 
    ? publications 
    : publications.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="publications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Research Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed publications synchronized with DBLP and manually curated entries
          </p>
        </motion.div>

        <div className="space-y-6">
          {loading ? (
            Array.from({ length: INITIAL_DISPLAY_COUNT }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-[200px] w-full rounded-lg" />
              </div>
            ))
          ) : error ? (
            <div className="text-center text-destructive">
              <p>{error}</p>
            </div>
          ) : publications.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>No publications found</p>
            </div>
          ) : (
            <>
              {displayedPublications.map((publication, index) => (
                <PublicationCard
                  key={`${publication.key || publication.doi || index}`}
                  publication={publication}
                  index={index}
                />
              ))}
              
              {publications.length > INITIAL_DISPLAY_COUNT && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                    className="gap-2"
                  >
                    {showAll ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More ({publications.length - INITIAL_DISPLAY_COUNT} more)
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}