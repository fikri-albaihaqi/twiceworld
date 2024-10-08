"use client"

import db from "@/app/utils/firestore"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { collection, deleteDoc, doc, endBefore, limit, orderBy, query, startAfter } from "@firebase/firestore"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = () => {
  const [page, setPage] = useState<number>(1)
  const pageSize = 20;

  const [songs, setSongs] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()

  const collectionRef = collection(db, "songs")
  const dbQuery = query(collectionRef, orderBy("title", "asc"), limit(pageSize))

  useEffect(() => {
    getAllDocuments(dbQuery).then(data => setSongs(data))
  }, [])

  const nextPage = ({ item }: any) => {
    if (songs.length === 0) {
      alert("Thats all the song for now!")
    } else {
      const collectionRef = collection(db, "songs")
      const dbQuery = query(collectionRef, orderBy("title", "asc"), limit(pageSize), startAfter(item.title))
      getAllDocuments(dbQuery).then(data => setSongs(data))
      setPage(page + 1)
    }
  }

  const previousPage = ({ item }: any) => {
    const collectionRef = collection(db, "songs")
    const dbQuery = query(collectionRef, orderBy("title", "asc"), limit(pageSize), endBefore(item.title))
    getAllDocuments(dbQuery).then(data => setSongs(data))
    setPage(page - 1)
  }

  const convertSongDuration = (duration: number) => {
    let minutes = Math.floor(duration / 60)
    let extraSeconds: any = duration % 60
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds
    return minutes + ":" + extraSeconds
  }

  const deleteSong = async (id: string) => {
    try {
      await deleteDoc(doc(db, "songs", id))
      location.reload()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <main>
      <div className="min-h-screen mx-16">
        <Link href="/admin/song/add">
          <button type="button" className="bg-primary-pink p-2 rounded text-white mt-8">
            Add Song
            <FontAwesomeIcon icon={faPlus} size="1x" style={{ color: "#ffff" }} className="ml-2" />
          </button>
        </Link>
        <div className="">
          <table className="w-full mt-8">
            <thead className="border-b-2 border-alternate-black">
              <tr>
                <th className="text-start">Title</th>
                <th className="text-start">Duration</th>
                <th className="text-start">Albums</th>
                <th className="text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {songs?.map((song: any) =>
                <tr key={song.id}>
                  <td>{song.title}</td>
                  <td>{convertSongDuration(song.duration)}</td>
                  <td>
                    {song.albums.map((album: any) => <>{album} <br /></>)}
                  </td>
                  <td>
                    <Link href={`/admin/song/edit/${song.id}`} className="bg-primary-pink mx-px p-2 rounded text-white">
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => deleteSong(song.id)} className="bg-red-700 mx-px p-2 rounded text-white">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-center mt-8">
            {
              page === 1 ? '' : <button onClick={() => previousPage({ item: songs[0] })} className="mx-2">Previous</button>
            }

            {
              songs.length < 20 ? '' : <button onClick={() => nextPage({ item: songs[songs.length - 1] })} className="mx-2">Next</button>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page