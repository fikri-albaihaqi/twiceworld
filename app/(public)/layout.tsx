import type { Metadata } from 'next'
import '../globals.css'
import Menu from '../components/menu'
import { poppins } from '../assets/fonts'
import Footer from '../components/footer'

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
        className="bg-[url('/bg-1.png')] bg-cover bg-fixed overflow-x-hidden text-alternate-black"
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
