import type { Metadata } from 'next'
import '../globals.css'
import Menu from '../components/menu'
import { poppins } from '../assets/fonts'
import Footer from '../components/footer'
import { ReactLenis } from '../lib/utils/lenis'

export const metadata: Metadata = {
  title: 'Twiceworld',
  description:
    'Explore Twiceworld – the ultimate fan hub for TWICE! TWICE is a K-Pop girl group composed of 9 members: NAYEON, JEONGYEON, MOMO, SANA, JIHYO, MINA, DAHYUN, CHAEYOUNG, and TZUYU.',
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
        <body className="bg-[url('/bg-1.webp')] bg-cover bg-fixed overflow-x-hidden text-alternate-black">
          <Menu />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  )
}
