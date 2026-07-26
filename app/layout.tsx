import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { GoogleTagManager } from '@next/third-parties/google'
import { SITE } from '@/lib/constants'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Constructora en Valencia | Obra Nueva, Reformas y Rehabilitación',
    template: '%s | Constructora en Valencia',
  },
  description:
    'Empresa constructora en Valencia con +15 años de experiencia. Especialistas en obra nueva, reformas integrales, rehabilitación de edificios y naves industriales. Presupuesto gratis en 24h.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Constructora en Valencia | Obra Nueva, Reformas y Rehabilitación',
    description:
      'Empresa constructora en Valencia con +15 años de experiencia. Obra nueva, reformas integrales, rehabilitación y naves industriales. Presupuesto gratis en 24h.',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  verification: {
    google: 'vrAiLGsIegBIz-AobVPELao8kReAx6RVkOZIaMJUvMc',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Constructora en Valencia',
  url: 'https://constructoravalencia.com',
  telephone: '+34960731206',
  email: 'info@constructoravalencia.com',
  foundingDate: '2008',
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Carrer de Sant Vicent Màrtir, 85',
    addressLocality: 'Valencia',
    postalCode: '46002',
    addressRegion: 'Comunitat Valenciana',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.4699,
    longitude: -0.3763,
  },
  areaServed: [
    'Valencia', 'Paterna', 'Torrent', 'Burjassot',
    "L'Eliana", 'Rocafort', 'Riba-roja de Túria', 'Mislata',
    'Sagunto', 'Alzira', 'Gandía',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://constructoravalencia.com',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleTagManager gtmId="GTM-KS8WH5PK" />
    </html>
  )
}
