"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/app/(public)/discography/styles.module.css"
import { useEffect, useState } from "react";
import { useGetAllDocuments } from "@/app/utils/useGetAllDocuments";

export default function Page() {
  const [discography, setDiscography] = useState<any>([])
  const { getAllDocuments } = useGetAllDocuments()
  const [image, setImage] = useState<string>("")

  useEffect(() => {
    getAllDocuments("discography", "releaseDate", "desc").then(data => setDiscography(data))
  }, [])

  const handleMouseEnter = (imageSource: string) => {
    return () => {
      setImage(imageSource)
    }
  }

  return (
    <main className="w-screen h-max flex flex-col xl:flex-row">
      <div className="sticky top-0 w-screen xl:w-1/2 h-[40vh] xl:h-screen">
        <Image src={image} alt="Album" fill={true} className="object-cover" />
      </div>
      <div className="w-screen xl:w-1/2 flex flex-col">
        {discography?.map((item: any) => (
          <Link
            href={`/discography/${item.id}`}
            key={item.id}
            onMouseEnter={handleMouseEnter(item.image)}
            className={`${styles.discography} py-8 pl-8 xl:pl-12 flex flex-col text-3xl uppercase 
              shadow-[24px_-6px_16px_rgba(120,120,120,0.4)] first:shadow-none hover:text-primary-pink`}
          >
            {item.name} • {item.releaseDate.slice(0, 4)}
            <span
              className={`${styles.detail} text-base text-alternate-black mt-6`}
            >
              {item.alternateName}
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}