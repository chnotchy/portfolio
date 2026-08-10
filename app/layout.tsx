import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const siteName = "Notchy's Portfolio"
const siteUrl = 'https://chnotchy.com'
const description = 'Notchy のポートフォリオ。制作した Web サイトと扱える技術をまとめています。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Notchy',
    template: '%s | Notchy',
  },
  description,
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName,
    locale: 'ja_JP',
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

// 初回ペイント前に .dark を確定させる。
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-[100dvh] flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
