"use client"

import db from "@/app/utils/firestore"
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments"
import { useGetDocument } from "@/app/utils/useGetDocument"
import { useGetSubcollection } from "@/app/utils/useGetSubcollection"
import { collection, orderBy, query, where } from "@firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = (
  {
    params
  }: {
    params: { id: string }
  }
) => {
  const { getDocument } = useGetDocument()
  const { getAllDocuments } = useGetAllDocuments()

  const [discography, setDiscography] = useState<any>()
  const [tracks, setTracks] = useState<any>()

  useEffect(() => {
    getDocument("discography", params.id).then(data => setDiscography(data))
  }, [])

  useEffect(() => {
    if (discography) {
      const collectionRef = collection(db, "songs")
      const dbQuery = query(collectionRef, where("albums", "array-contains", discography?.name))
      getAllDocuments(dbQuery).then(data => setTracks(data))
    }
  }, [discography])

  return (
    <main>
      <div className="w-screen h-max flex flex-col xl:flex-row">
        <div className="sticky top-0 w-screen xl:w-1/2 h-[40vh] xl:h-screen">
          <Image src={discography?.image} alt="Album" fill={true} className="object-cover" />
        </div>
        <div className="w-screen xl:w-1/2 flex flex-col justify-center mt-32">
          <div className="mx-16">
            <Link
              href={`/admin/discography/edit/${params.id}`}
              className="absolute top-24 right-16 bg-primary-pink p-2 rounded text-white"
            >
              Edit Discography
            </Link>
            <h1 className="text-6xl uppercase font-bold text-primary-pink">{discography?.name}</h1>
            <h2 className="font-bold text-2xl mt-4">{discography?.releaseDate.slice(0, 4)} • {discography?.alternateName}</h2>

            <p className="mt-8">
              {discography?.description}
            </p>
          </div>

          <div className="mt-8 mx-16">
            <h2 className="text-2xl text-primary-pink font-bold">INFO</h2>
            <div className="flex">
              <h3>Release Type:</h3>
              <p className="ml-4">{discography?.type}</p>
            </div>
            <div className="flex">
              <h3>Language:</h3>
              <p className="ml-4">{discography?.language}</p>
            </div>
          </div>

          <div className="mt-8 mx-16">
            <h2 className="text-2xl text-primary-pink font-bold">TRACK LIST</h2>
            <ol className="list-decimal ml-4 mb-8">
              {tracks?.sort().map((track: any) => <li>{track.title}</li>)}
            </ol>
            <Link href="/admin/discography/add/track" className="bg-primary-pink p-2 rounded text-white">
              Add Track
            </Link>
          </div>
        </div>
      </div>
      <iframe src={discography?.video}
        title={discography?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-[90%] h-[40vh] lg:h-[60vh] xl:h-screen m-auto mt-16 mb-16 rounded-3xl"
      >
      </iframe>
    </main>
  )
}

export default Page