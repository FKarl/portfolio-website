import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n-context'

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fkarl.de'),
  title: {
    default: 'Fabian Karl | NLP Researcher at TU Munich',
    template: '%s | Fabian Karl'
  },
  description: 'PhD researcher at TU Munich making language models work in expert domains where data is scarce: synthetic data, retrieval and evaluation.',
  keywords: ['NLP', 'Synthetic Data', 'Domain Adaptation', 'Information Retrieval', 'Medical NLP', 'LLM Evaluation', 'PhD Researcher', 'TUM', 'AIdapt', 'Software Campus'],
  authors: [{ name: 'Fabian Karl' }],
  creator: 'Fabian Karl',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fkarl.de',
    title: 'Fabian Karl | NLP Researcher at TU Munich',
    description: 'PhD researcher at TU Munich making language models work in expert domains where data is scarce: synthetic data, retrieval and evaluation.',
    siteName: 'Fabian Karl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Karl | NLP Researcher at TU Munich',
    creator: '@FabiKarl',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.fkarl.de" />
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
              jobTitle: "PhD Researcher",
              worksFor: { "@type": "Organization", name: "Technical University of Munich (TUM)" },
            })
          }}
        />
      </head>
      <body className={instrumentSans.variable}
        style={{ fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif' }}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
