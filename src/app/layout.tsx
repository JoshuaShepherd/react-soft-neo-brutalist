import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Soft Neo-Brutalist Template',
  description: 'A bold, memorable homepage template with chunky design elements and playful brutalist aesthetics',
  keywords: ['brutalist', 'design', 'react', 'nextjs', 'bold', 'chunky'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-inter bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
