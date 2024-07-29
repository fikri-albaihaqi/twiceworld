"use client"

import Discography from "@/app/components/discography"
import db from "@/app/utils/firestore"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { collection, endBefore, limit, orderBy, query, startAfter } from "@firebase/firestore"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = () => {
  const [page, setPage] = useState<number>(1)
  const pageSize = 8;

  const [discography, setDiscography] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()

  const collectionRef = collection(db, "discography")
  const dbQuery = query(collectionRef, orderBy("releaseDate", "desc"), limit(pageSize))

  useEffect(() => {
    getAllDocuments(dbQuery).then(data => setDiscography(data))
  }, [])

  const nextPage = ({ item }: any) => {
    if (discography.length === 0) {
      alert("Thats all the song for now!")
    } else {
      const collectionRef = collection(db, "discography")
      const dbQuery = query(collectionRef, orderBy("releaseDate", "desc"), limit(pageSize), startAfter(item.releaseDate))
      getAllDocuments(dbQuery).then(data => setDiscography(data))
      setPage(page + 1)
    }
  }

  const previousPage = ({ item }: any) => {
    const collectionRef = collection(db, "discography")
    const dbQuery = query(collectionRef, orderBy("releaseDate", "desc"), limit(pageSize), endBefore(item.releaseDate))
    getAllDocuments(dbQuery).then(data => setDiscography(data))
    setPage(page - 1)
  }

  return (
    <main>
      <div className="min-h-screen mx-4">
        <Link href="/admin/discography/add">
          <button type="button" className="bg-primary-pink p-2 rounded text-white mt-8">
            Add Discography
            <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: "#ffff" }} className="ml-2" />
          </button>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {discography.map((item: any) => <Discography album={item} admin={true} key={item.id} />)}
        </div>
        <div className="flex justify-center mt-8">
          {
            page === 1 ? '' : <button onClick={() => previousPage({ item: discography[0] })} className="mx-2">Previous</button>
          }

          {
            discography.length < 8 ? '' : <button onClick={() => nextPage({ item: discography[discography.length - 1] })} className="mx-2">Next</button>
          }
        </div>
      </div>
    </main>
  )
}

export default Page