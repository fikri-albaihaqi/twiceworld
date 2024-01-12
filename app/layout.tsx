import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/menu'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body
        className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-amber-100 
        to-pink-300"
      >
        <Menu />
        {children}
      </body>
    </html>
  )
}
