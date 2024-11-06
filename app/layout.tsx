import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fkarl.de'),
  title: {
    default: 'Fabian Karl - Data Scientist & ML Engineer',
    template: '%s | Fabian Karl'
  },
  description: 'Data Scientist and ML Engineer specializing in Natural Language Processing, Machine Learning research, and AI development. View my portfolio, publications, and research projects.',
  keywords: ['Data Science', 'Machine Learning', 'NLP', 'AI Research', 'Computer Science', 'PhD Student', 'ML Engineer'],
  authors: [{ name: 'Fabian Karl' }],
  creator: 'Fabian Karl',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fkarl.de',
    title: 'Fabian Karl - Data Scientist & ML Engineer',
    description: 'Data Scientist and ML Engineer specializing in Natural Language Processing, Machine Learning research, and AI development.',
    siteName: 'Fabian Karl Portfolio',
    images: [
      {
        url: '/assets/hero/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Fabian Karl - Data Scientist & ML Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Karl - Data Scientist & ML Engineer',
    description: 'Data Scientist and ML Engineer specializing in Natural Language Processing, Machine Learning research, and AI development.',
    creator: '@FabiKarl',
    images: ['/assets/hero/avatar.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="canonical" href="https://www.fkarl.de"/>
      <title>Fabian Karl - Data Scientist & Researcher</title>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fabian Karl",
              url: "https://www.fkarl.de",
              sameAs: [
                "https://github.com/FKarl",
                "https://www.linkedin.com/in/FKarl",
                "https://twitter.com/FabiKarl",
                "https://scholar.google.com/citations?hl=en&user=Pv9PEEQAAAAJ",
                "https://dblp.uni-trier.de/pid/239/6427-1.html"
              ],
              jobTitle: "Data Scientist",
              worksFor: {
                "@type": "Organization",
                name: "Ulm University"
              },
              alumniOf: {
                "@type": "Organization",
                name: "Ulm University"
              },
              description: "Data Scientist and ML Engineer specializing in Natural Language Processing and Machine Learning research."
            })
          }}
      />
    </head>
    <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}