import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Serif, Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Amigdala - The Self-Evolving Enterprise Knowledge Engine',
  description:
    'Amigdala is the observe-act layer between AI agents and how your company runs. Persistent enterprise context, visual decision pathways, and audit-ready intelligence.',
  keywords: [
    'enterprise knowledge engine',
    'enterprise AI',
    'persistent context',
    'AI agents',
    'decision intelligence',
    'knowledge galaxy',
  ],
  authors: [{ name: 'Amigdala' }],
  creator: 'Amigdala',
  publisher: 'Amigdala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Amigdala - The Self-Evolving Enterprise Knowledge Engine',
    description:
      'Persistent enterprise context for AI agents, executives, and the decisions they need to make.',
    siteName: 'Amigdala',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amigdala - The Self-Evolving Enterprise Knowledge Engine',
    description:
      'Persistent enterprise context for AI agents, executives, and the decisions they need to make.',
  },
}

export const viewport: Viewport = {
  themeColor: '#F8F7F4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSerif.variable} ${inter.variable} ${spaceGrotesk.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
