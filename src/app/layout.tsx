import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer/footer'
import { CartProvider } from '@/providers/cart-provider'

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900',], style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sonner',
  description: 'Sonner find everything you need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>
        <ThemeProvider>
          <CartProvider>

            <Navbar />
            <main className='flex-1 min-h-full w-full'>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
