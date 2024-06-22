"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { auth } from "../utils/firebaseConfig"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const AdminMenu = () => {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
        router.push("/login")
      }
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = () => {
    auth.signOut()
    router.push("/login")
  }

  return (
    <nav className="w-screen flex justify-between px-8 py-4 bg-alternate-black text-white">
      <div className="flex items-center">
        <Link href="/admin" className="w-[32px] md:w-[48px]" >
          <Image src="/twice-logo.svg" alt="Twice logo" width={64} height={0} />
        </Link>
        <ul className="flex ml-4">
          <Link href="/admin">
            <li className="mx-2 hover:text-primary-pink">Discography</li>
          </Link>
          <Link href="/admin/song">
            <li className="mx-2 hover:text-primary-pink">Song</li>
          </Link>
          <Link href="/admin/history">
            <li className="mx-2 hover:text-primary-pink">History</li>
          </Link>
        </ul>
      </div>
      <button onClick={handleLogout} className="">
        Logout
        <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" style={{ color: "#ffff" }} className="ml-2" />
      </button>
    </nav>
  )
}

export default AdminMenu