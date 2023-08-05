import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer/footer'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunner',
  description: 'Create your own E-commerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
