import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Karl, NLP Researcher',
    short_name: 'Fabian Karl',
    description: 'PhD researcher at TU Munich working on synthetic data, retrieval and evaluation for expert domains.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b6349',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}