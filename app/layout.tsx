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
  keywords: [
    'constructora valencia',
    'empresa constructora valencia',
    'obra nueva valencia',
    'reformas integrales valencia',
    'rehabilitacion edificios valencia',
    'naves industriales valencia',
  ],
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
    google: 'NQtv12w6hAM9DaLjsXNyiNJLb9fhb909nq9Ar5QaN_M',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="font-sans antialiased text-slate-800 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleTagManager gtmId="GTM-MC3MSZK4" />
    </html>
  )
}
