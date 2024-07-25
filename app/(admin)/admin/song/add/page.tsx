"use client"

import { useState } from "react"
import { useAddDocument } from '@/app/utils/useAddDocument'
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  const [albumOrder, setAlbumOrder] = useState({
    album: "",
    order: "",
  })
  const [albums, setAlbums] = useState<any>([])
  const [orders, setOrders] = useState<any>([])
  const [form, setForm] = useState({
    title: "",
    duration: "",
    albums: [],
    order: []
  })

  const onFormChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onAlbumFormChange = (e: { target: { name: any; value: any } }) => {
    setAlbumOrder({ ...albumOrder, [e.target.name]: e.target.value })
  }

  const addDocument = useAddDocument()

  const handleInput = () => {
    try {
      let orderArray = form.order.slice()
      orderArray = orders

      let albumsArray = form.albums.slice()
      albumsArray = albums
      
      const newForm = { ...form, albums: albumsArray, position: orderArray }
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
            onChange={onFormChange}
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
            onChange={onFormChange}
            placeholder="Total duration in seconds"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Albums</label>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col mx-2">
                <span>Album Name</span>
                <input
                  type="text"
                  name="name"
                  value={albumOrder.album}
                  onChange={onAlbumFormChange}
                  placeholder="ex: The Story Begins"
                  className="px-2"
                />
              </div>

              <div className="flex flex-col mx-2">
                <span>Song Order</span>
                <input
                  type="text"
                  name="order"
                  value={albumOrder.order}
                  onChange={onAlbumFormChange}
                  placeholder="Song's order in the album"
                  className="px-2"
                />
              </div>
            </div>
            <button onClick={(e) => {
              e.preventDefault()
              setOrders([
                ...orders,
                albumOrder
              ])
              setAlbums([
                ...albums,
                albumOrder.album
              ])
            }} className="w-max bg-primary-pink text-white p-2 mt-2 rounded">
              Add Album
            </button>
            <ul>
              {orders?.map((item: any) => <li key={item.name}>{item.name}</li>)}
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