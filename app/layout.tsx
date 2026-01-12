import type { Metadata } from 'next'
import { Libre_Baskerville, Outfit } from 'next/font/google'
import './globals.css'

// Self-hosted fonts via next/font (GDPR compliant - no external requests)
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

// Metadata - all facts from SOURCES.md
export const metadata: Metadata = {
  title: "D O'Shea's Bar | The Pink Pub in Sneem, Ring of Kerry",
  description: "Traditional Irish pub and restaurant in Sneem, Co. Kerry. One of Ireland's most photographed pubs. Home cooked food daily 12pm-9pm. Kerry lamb, Sneem sausages, local seafood.",
  keywords: ['Sneem pub', 'Ring of Kerry restaurant', 'pink pub Ireland', 'Kerry food', 'Irish pub Sneem'],
}

// LocalBusiness Schema - all facts from SOURCES.md
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "D O'Shea's Bar", // SOURCES.md: RESEARCH.md line 20
  alternateName: "The Pink Pub", // SOURCES.md: RESEARCH.md line 21
  description: "Traditional Irish Pub & Restaurant", // SOURCES.md: RESEARCH.md line 22
  url: 'https://dosheas-bar-v3.pages.dev',
  telephone: '+353646645281', // SOURCES.md: RESEARCH.md line 26
  email: 'dosheas@eircom.net', // SOURCES.md: RESEARCH.md line 27
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'North Square', // SOURCES.md: RESEARCH.md line 23
    addressLocality: 'Sneem',
    addressRegion: 'Co. Kerry',
    addressCountry: 'IE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.838653, // SOURCES.md: RESEARCH.md line 25
    longitude: -9.901576, // SOURCES.md: RESEARCH.md line 25
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '12:00', // SOURCES.md: RESEARCH.md line 64
    closes: '21:00', // SOURCES.md: RESEARCH.md line 64
  },
  servesCuisine: ['Irish', 'Pub Food'], // SOURCES.md: RESEARCH.md line 22
  priceRange: '€€', // Inferred from menu prices €6.95-€29.50
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1', // SOURCES.md: RESEARCH.md line 108 - #1 in Sneem
    bestRating: '5',
  },
  award: 'TripAdvisor Certificate of Excellence', // SOURCES.md: RESEARCH.md line 107
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
