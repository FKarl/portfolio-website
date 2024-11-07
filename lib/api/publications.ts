import { XMLParser } from "fast-xml-parser";
import type { Publication } from "@/lib/types/publication";

// Manual publications to include alongside DBLP data
const manualPublications: Publication[] = [
  {
    title: "GenCodeSearchNet: A Benchmark Test Suite for Evaluating Generalization in Programming Language Understanding",
    authors: ["Andor Diera", "Abdelhalim Dahou", "Lukas Galke", "Fabian Karl", "Florian Sihler", "Ansgar Scherp"],
    venue: "Association for Computational Linguistics",
    year: "2023",
    url: "https://aclanthology.org/2023.genbench-1.2/",
    type: "Workshop Paper",
    add_tag: "Best Paper Award",
    doi: "10.18653/v1/2023.genbench-1.2"
  }
];

// Publications to exclude from display (by DBLP key)
const blacklistedKeys = new Set([
  "example/blacklisted/key"
]);

// Helper function to clean author names by removing numeric IDs
function cleanAuthorName(name: string): string {
  // Remove numeric IDs (e.g., "0001") from the end of names
  return name.replace(/\s+\d+$/, '').trim();
}

export async function getPublications(): Promise<Publication[]> {
  try {
    const response = await fetch(
      'https://dblp.org/pid/239/6427-1.xml',
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch publications');
    }

    const text = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "text"
    });
    
    const result = parser.parse(text);
    const entries = result?.dblpperson?.r || [];

    // Process DBLP publications
    const dblpPublications = entries
      .map((entry: any) => {
        // Skip blacklisted publications
        if (blacklistedKeys.has(entry["@_key"])) {
          return null;
        }

        const pubType = Object.keys(entry).find(key => 
          key !== '@_key' && key !== '@_mdate'
        );
        
        if (!pubType) return null;
        
        const pub = entry[pubType];
        
        const authors = Array.isArray(pub.author) ? pub.author : [pub.author];
        const authorNames = authors.map((author: any) => {
          const rawName = typeof author === 'string' ? author : author.text || author;
          return cleanAuthorName(rawName);
        });
        
        return {
          title: typeof pub.title === 'string' ? pub.title : pub.title.text,
          authors: authorNames,
          venue: pub.journal || pub.booktitle || '',
          year: pub.year,
          url: Array.isArray(pub.ee) ? pub.ee[0] : pub.ee,
          type: pubType,
          key: entry["@_key"],
          doi: typeof pub.ee === 'string' ? 
            pub.ee.match(/10\.\d{4,9}\/[-._;()\/:A-Z0-9]+/i)?.[0] : 
            Array.isArray(pub.ee) && pub.ee[0] ? 
              pub.ee[0].match(/10\.\d{4,9}\/[-._;()\/:A-Z0-9]+/i)?.[0] : 
              undefined
        };
      })
      .filter(Boolean);

    // Combine and sort all publications by year (descending)
    return [...manualPublications, ...dblpPublications]
      .sort((a, b) => parseInt(b.year) - parseInt(a.year));
  } catch (error) {
    console.error('Error fetching publications:', error);
    return manualPublications;
  }
}