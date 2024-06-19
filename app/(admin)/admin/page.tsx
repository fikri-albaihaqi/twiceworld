"use client"

import Discography from "@/app/components/discography"
import { auth } from "@/app/utils/firebaseConfig"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
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

  const [discography, setDiscography] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()

  useEffect(() => {
    getAllDocuments("discography", "releaseDate", "desc").then(data => setDiscography(data))
  }, [])

  return (
    <main>
      {user ? (
        <div className="min-h-screen mx-4">
          <Link href="/admin/discography/add">
            <button type="button" className="bg-primary-pink p-2 rounded text-white mt-8">
              Add Discography
              <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: "#ffff" }} className="ml-2" />
            </button>
          </Link>
          <div className="grid grid-cols-4">
            {discography.map((item: any) => <Discography album={item} admin={true} key={item.id} />)}
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
        </div>
      )}
    </main>
  )
}

export default Page