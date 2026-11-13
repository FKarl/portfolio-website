import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n-context'
import { LINKS } from '@/lib/i18n'

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
    type: 'profile',
    firstName: 'Fabian',
    lastName: 'Karl',
    locale: 'en_US',
    url: 'https://www.fkarl.de',
    title: 'Fabian Karl | NLP Researcher at TU Munich',
    description: 'PhD researcher at TU Munich making language models work in expert domains where data is scarce: synthetic data, retrieval and evaluation.',
    siteName: 'Fabian Karl',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fabian Karl, NLP researcher at TU Munich' }],
  },
  alternates: { canonical: 'https://www.fkarl.de' },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Karl | NLP Researcher at TU Munich',
    description: 'PhD researcher at TU Munich making language models work in expert domains where data is scarce: synthetic data, retrieval and evaluation.',
    creator: '@FabiKarl',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url: "https://www.fkarl.de",
              name: "Fabian Karl | NLP Researcher at TU Munich",
              inLanguage: ["en", "de"],
              mainEntity: {
                "@type": "Person",
                "@id": "https://www.fkarl.de/#person",
                name: "Fabian Karl",
                givenName: "Fabian",
                familyName: "Karl",
                url: "https://www.fkarl.de",
                image: "https://www.fkarl.de/assets/hero/portrait.jpg",
                email: `mailto:${LINKS.email}`,
                jobTitle: "PhD Researcher in Natural Language Processing",
                description: "PhD researcher at TU Munich making language models work in expert domains where data is scarce: synthetic data, retrieval and evaluation.",
                worksFor: {
                  "@type": "CollegeOrUniversity",
                  name: "Technical University of Munich (TUM)",
                  url: "https://www.tum.de",
                  department: { "@type": "Organization", name: "Chair of Software Engineering for Business Information Systems (sebis)", url: "https://www.cs.cit.tum.de/sebis/" },
                },
                alumniOf: { "@type": "CollegeOrUniversity", name: "Ulm University", url: "https://www.uni-ulm.de" },
                homeLocation: { "@type": "Place", name: "Munich, Germany" },
                knowsLanguage: ["en", "de"],
                knowsAbout: [
                  "Natural language processing",
                  "Synthetic data generation",
                  "Domain adaptation of large language models",
                  "Information retrieval",
                  "Retrieval-augmented generation",
                  "Evaluation of language models",
                  "Medical NLP",
                  "Text classification",
                ],
                identifier: { "@type": "PropertyValue", propertyID: "ORCID", value: "0009-0008-0079-5604" },
                sameAs: [
                  LINKS.orcid,
                  LINKS.scholar,
                  "https://dblp.org/pid/239/6427-1.html",
                  "https://www.cs.cit.tum.de/sebis/team/fabian-karl/",
                  LINKS.github,
                  LINKS.linkedin,
                  "https://twitter.com/FabiKarl",
                ],
              },
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
