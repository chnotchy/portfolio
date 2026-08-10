import type { Metadata, Viewport } from 'next'
import { Inter, Quicksand } from 'next/font/google'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-quicksand',
  display: 'swap',
})

const siteName = "Notchy's Portfolio Website"
const siteUrl = 'https://chnotchy.com'
const description = "Notchy's portfolio website."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Notchy',
    template: '%s | Notchy',
  },
  description,
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: '/',
    title: siteName,
    description,
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chnotchy',
  },
}

export const viewport: Viewport = {
  themeColor: '#30a3f0',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${quicksand.variable}`}>
      <body className="flex min-h-[100dvh] flex-col justify-between">
        <div>
          <SiteHeader />
          <main className="mx-auto w-[min(90%,1200px)]">{children}</main>
        </div>
        <SiteFooter />
      </body>
    </html>
  )
}
