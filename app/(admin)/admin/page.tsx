"use client"

import { auth } from "@/app/utils/firebaseConfig"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
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

  return (
    <>
      {user ? (
        <div className="min-h-screen">
          <h1>Logged In</h1>
        </div>
      ) : (
        <div className="min-h-screen">
        </div>
      )}
    </>
  )
}

export default Page