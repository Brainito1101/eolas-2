import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eolas - The Future of Edge Intelligence',
  description: 'Discover EolasEdge and EolasReach - Revolutionary AI solutions for the modern world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="min-h-screen bg-eolas-darker antialiased">
        {children}
      </body>
    </html>
  )
}