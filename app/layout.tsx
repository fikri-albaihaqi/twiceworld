import type { Metadata } from 'next'
import './globals.css'
import Menu from './components/menu'
import { poppins } from './assets/fonts'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Twiceland',
  description: 'Everything abaout the best Girl Group TWICE!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body
        className="bg-fixed text-alternate-black bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] 
        from-amber-100 to-pink-300 overflow-x-hidden"
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
