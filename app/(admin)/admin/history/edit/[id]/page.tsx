"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useGetDocument } from "@/app/utils/useGetDocument"
import { useUpdateDocument } from "@/app/utils/useUpdateDocument"

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter()

  const [history, setHistory] = useState<any>({
    title: "",
    date: "",
    description: "",
    image: "",
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setHistory({ ...history, [e.target.name]: e.target.value })
  }

  const { getDocument } = useGetDocument()
  const updateDocument = useUpdateDocument()

  useEffect(() => {
    getDocument("histories", params.id).then(data => setHistory(data))
  }, [])

  const handleInput = () => {
    try {
      updateDocument("histories", params.id, history)
      router.push("/admin/history")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main className="mx-16 mb-16">
      <h1 className="text-2xl font-bold mt-8">Add New History</h1>
      <form action="" className="w-1/2 mt-4">
        <div className="flex justify-between my-2">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={history.title}
            onChange={onChange}
            placeholder="ex: The First Comeback"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Date</label>
          <input
            type="text"
            name="date"
            value={history.date}
            onChange={onChange}
            placeholder="ex: 2015-10-20"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={history.image}
            onChange={onChange}
            placeholder="The link to the image"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Description</label>
          <textarea
            name="description"
            value={history.description}
            onChange={onChange}
            placeholder="History description"
            className="px-2 h-[400px] w-[400px]"
          />
        </div>
        <button onClick={handleInput} type="button" className="bg-primary-pink text-white w-min p-2 mt-8 rounded">
          Submit
        </button>
      </form>
    </main>
  )
}

export default Page