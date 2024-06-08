import { poppins } from "../assets/fonts"

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
      </body>
    </html>
  )
}

export default AdminLayout