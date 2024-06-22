"use client"

import { useState } from "react"
import { useAddDocument } from '@/app/utils/useAddDocument'
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const addDocument = useAddDocument()

  const handleInput = () => {
    try {
      addDocument("histories", form)
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
            value={form.title}
            onChange={onChange}
            placeholder="ex: The First Comeback"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Year</label>
          <input
            type="number"
            name="year"
            value={form.year}
            onChange={onChange}
            placeholder="ex: 2015"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={onChange}
            placeholder="The link to the image"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            placeholder="History description"
            className="px-2 h-[150px]"
          />
        </div>
        <button onClick={handleInput} type="button" className="bg-primary-pink text-white w-min p-2 mt-8 rounded">
          Add
        </button>
      </form>
    </main>
  )
}

export default Page