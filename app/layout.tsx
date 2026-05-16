import './globals.css'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n-context'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fkarl.de'),
  title: {
    default: 'Fabian Karl — ML Research',
    template: '%s | Fabian Karl'
  },
  description: 'Data Scientist and PhD student at TUM specializing in Medical NLP, Information Retrieval, and Machine Learning research.',
  keywords: ['Data Science', 'Machine Learning', 'Medical NLP', 'NLP', 'AI Research', 'PhD Student', 'ML Engineer', 'TUM', 'Information Retrieval'],
  authors: [{ name: 'Fabian Karl' }],
  creator: 'Fabian Karl',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fkarl.de',
    title: 'Fabian Karl — ML Research',
    description: 'Data Scientist and PhD student at TUM specializing in Medical NLP, Information Retrieval, and Machine Learning research.',
    siteName: 'Fabian Karl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Karl — ML Research',
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
              jobTitle: "Data Scientist",
              worksFor: { "@type": "Organization", name: "Technical University of Munich (TUM)" },
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
        style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif' }}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
