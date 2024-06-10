import AdminMenu from "@/app/components/adminMenu"

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <AdminMenu />
      {children}
    </>
  )
}

export default DashboardLayout