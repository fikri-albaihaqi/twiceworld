"use client"

import { useState } from "react"
import { useAddDocument } from '@/app/utils/useAddDocument'
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  const [album, setAlbum] = useState("")
  const [albums, setAlbums] = useState<any>([])
  const [form, setForm] = useState({
    title: "",
    duration: "",
    albums: []
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const addDocument = useAddDocument()

  const handleInput = () => {
    try {
      let array = form.albums.slice()
      array = albums
      
      const newForm = {...form, albums: array}
      
      addDocument("songs", newForm)
      
      router.push("/admin/song")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main className="mx-16 mb-16">
      <h1 className="text-2xl font-bold mt-8">Add New Song</h1>
      <form action="" className="w-1/2 mt-4">
        <div className="flex justify-between my-2">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="ex: Feel Special"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={onChange}
            placeholder="Total duration in seconds"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Albums</label>
          <div className="flex flex-col">
            <input
              type="text"
              name="album"
              value={album}
              onChange={e => setAlbum(e.target.value)}
              placeholder="ex: The Story Begins"
              className="px-2"
            />
            <button onClick={(e) => {
              e.preventDefault()
              setAlbums([
                ...albums,
                album
              ])
            }} className="w-max bg-primary-pink text-white p-2 mt-2 rounded">
              Add Album
            </button>
            <ul>
              {albums.map((item: any) => <li>{item}</li>)}
            </ul>
          </div>
        </div>
        <button onClick={handleInput} type="button" className="bg-primary-pink text-white w-min p-2 mt-8 rounded">
          Add
        </button>
      </form>
    </main>
  )
}

export default Page