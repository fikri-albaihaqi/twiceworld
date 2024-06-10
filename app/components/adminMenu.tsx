"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { auth } from "../utils/firebaseConfig"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const AdminMenu = () => {
  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <nav className="w-screen flex justify-between px-16 py-4 bg-alternate-black text-white">
      <h1>Welcome to Twiceland Dashboard!</h1>
      <button onClick={handleLogout} className="">
        Logout
        <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" style={{color: "#ffff"}} className="ml-2" />
      </button>
    </nav>
  )
}

export default AdminMenu