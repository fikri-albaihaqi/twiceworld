import type { Metadata } from 'next'
import '../globals.css'
import Menu from '../components/menu'
import { poppins } from '../assets/fonts'
import Footer from '../components/footer'
import { ReactLenis } from '../lib/utils/lenis'

export const metadata: Metadata = {
  title: 'Twiceworld',
  description: 'Everything about the best K-Pop Girl Group TWICE!',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <ReactLenis root>
        <body className="bg-[url('/bg-1.png')] bg-cover bg-fixed overflow-x-hidden text-alternate-black">
          <Menu />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  )
}
