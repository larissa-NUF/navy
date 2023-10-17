import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navy',
  description: 'Site de concessionária da Navy',
}

interface RootLayoutType {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutType) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
