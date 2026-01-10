import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Karl - Data Scientist & ML Engineer',
    short_name: 'Fabian Karl',
    description: 'Data Scientist and PhD Student at TUM specializing in Medical NLP, Information Retrieval, and Machine Learning research.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}