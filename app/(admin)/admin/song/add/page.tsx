"use client"

import { useState } from "react"
import { useAddDocument } from '@/app/utils/useAddDocument'
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  const [albumOrder, setAlbumOrder] = useState({
    album: "",
    position: "",
  })
  const [credit, setCredit] = useState<any>({
    memberName: "",
  })
  const [credits, setCredits] = useState<any>([])
  const [albums, setAlbums] = useState<any>([])
  const [orders, setOrders] = useState<any>([])
  const [form, setForm] = useState({
    title: "",
    duration: "",
    memberCredits: [],
    albums: [],
    order: []
  })

  const onFormChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onCreditChange = (e: { target: { name: any; value: any } }) => {
    setCredit({ ...credit, [e.target.name]: e.target.value })
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

      let creditsArray = form.memberCredits.slice()
      creditsArray = credits

      const newForm = { ...form, albums: albumsArray, memberCredits: creditsArray, order: orderArray }
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
        <div className=" flex flex-col my-2">
          <div className="flex justify-between">
            <label>Member Credits</label>
            <input
              type="text"
              name="memberName"
              value={credit.memberName}
              onChange={onCreditChange}
              placeholder="ex: Son Chaeyoung"
              className="px-2"
            />
          </div>
          <button onClick={(e) => {
            e.preventDefault()
            setCredits([
              ...credits,
              credit
            ])
          }} className="w-max self-end bg-primary-pink text-white p-2 mt-2 rounded">
            Add
          </button>
          <ol className="self-end list-decimal">
            {credits?.map((item: any) => <li key={item.memberName}>{item.memberName}</li>)}
          </ol>
        </div>
        <div className="flex justify-between my-2">
          <label>Albums</label>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col mx-2">
                <span>Album Name</span>
                <input
                  type="text"
                  name="album"
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
                  name="position"
                  value={albumOrder.position}
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
            }} className="w-max self-end bg-primary-pink text-white p-2 mt-2 rounded">
              Add Album
            </button>
            <ol className="list-decimal">
              {orders?.map((item: any) => <li key={item.album}>{item.album}</li>)}
            </ol>
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