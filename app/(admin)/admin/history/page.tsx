"use client"

import db from "@/app/utils/firestore"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { collection, deleteDoc, doc, orderBy, query } from "@firebase/firestore"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = () => {
  const [histories, setHistories] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()

  const collectionRef = collection(db, "histories")
  const dbQuery = query(collectionRef, orderBy("date", "asc"))

  useEffect(() => {
    getAllDocuments(dbQuery).then(data => setHistories(data))
  }, [])

  const deleteHistory = async (id: string) => {
    try {
      await deleteDoc(doc(db, "histories", id))
      location.reload()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <main>
      <div className="min-h-screen mx-16">
        <Link href="/admin/history/add">
          <button type="button" className="bg-primary-pink p-2 rounded text-white mt-8">
            Add History
            <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: "#ffff" }} className="ml-2" />
          </button>
        </Link>
        <div className="">
          <table className="w-full mt-8 table-fixed">
            <thead className="border-b-2 border-alternate-black">
              <tr>
                <th className="text-start">Title</th>
                <th className="text-start">Year</th>
                <th className="text-start">Description</th>
                <th className="text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {histories?.map((history: any) =>
                <tr key={history.title}>
                  <td>{history.title}</td>
                  <td>{history.date}</td>
                  <td className="truncate">
                    {history.description}
                  </td>
                  <td>
                    <Link href={`/admin/history/edit/${history.id}`} className="bg-primary-pink mx-px p-2 rounded text-white">
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => deleteHistory(history.id)} className="bg-red-700 mx-px p-2 rounded text-white">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Page