"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { auth } from "../utils/firebaseConfig"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"

const AdminMenu = () => {
  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <nav className="w-screen flex justify-between px-8 py-4 bg-alternate-black text-white">
      <Link href="/admin" className="w-[48px] md:w-[64px]" >
        <Image src="/twice-logo.svg" alt="Twice logo" width={64} height={0} />
      </Link>
      <button onClick={handleLogout} className="">
        Logout
        <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" style={{ color: "#ffff" }} className="ml-2" />
      </button>
    </nav>
  )
}

export default AdminMenu