"use client"

import Discography from "@/app/components/discography"
import db from "@/app/utils/firestore"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { collection, orderBy, query } from "@firebase/firestore"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = () => {

  const [discography, setDiscography] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()

  const collectionRef = collection(db, "discography")
  const dbQuery = query(collectionRef, orderBy("releaseDate", "desc"))

  useEffect(() => {
    getAllDocuments(dbQuery).then(data => setDiscography(data))
  }, [])

  return (
    <main>
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
    </main>
  )
}

export default Page