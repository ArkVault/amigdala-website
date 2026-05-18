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
  title: 'Aerlig - The Knowledge Engine for Enterprise',
  description:
    'Aerlig is the knowledge engine that powers enterprise intelligence. Manage source context, streamline reasoning, and unlock organizational knowledge with precision.',
  keywords: [
    'knowledge engine',
    'enterprise AI',
    'knowledge management',
    'AI infrastructure',
    'source context',
    'organizational intelligence',
  ],
  authors: [{ name: 'Aerlig' }],
  creator: 'Aerlig',
  publisher: 'Aerlig',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aerlig - The Knowledge Engine for Enterprise',
    description:
      'The knowledge engine that powers enterprise intelligence. Manage source context and unlock organizational knowledge.',
    siteName: 'Aerlig',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aerlig - The Knowledge Engine for Enterprise',
    description:
      'The knowledge engine that powers enterprise intelligence. Manage source context and unlock organizational knowledge.',
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
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
