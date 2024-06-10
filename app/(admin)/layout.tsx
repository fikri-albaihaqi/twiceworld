import { poppins } from "../assets/fonts"
import Footer from "../components/footer"
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twiceland Admin Page',
  description: 'Admin Page for adding or editing content in Twiceland',
}

const AdminLayout = ({
  children,
}:{
  children: React.ReactNode
}) => {
  return(
    <html lang="en" className={`${poppins.className}`}>
      <body
        className="bg-[url('/bg-1.png')] bg-cover bg-fixed overflow-x-hidden text-alternate-black"
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default AdminLayout