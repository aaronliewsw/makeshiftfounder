import '@/styles/globals.css'
import Providers from './providers'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  metadataBase: new URL('https://makeshiftfounder.com'),
  title: 'Makeshift Founder',
  description: 'Building tiny tools, documenting the chaos, and rebuilding in public. For tinkerers, builders, and other high-functioning disasters.',
  openGraph: {
    title: 'Makeshift Founder',
    description: 'Building tiny tools, documenting the chaos, and rebuilding in public.',
    type: 'website',
    url: 'https://makeshiftfounder.com'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@makeshftfounder',
    creator: '@makeshftfounder'
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${space.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
