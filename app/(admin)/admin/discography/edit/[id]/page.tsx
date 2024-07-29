"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUpdateDocument } from "@/app/utils/useUpdateDocument"
import { useGetDocument } from "@/app/utils/useGetDocument"

const Page = ({
  params,
}: {
  params: { id: string }
}) => {
  const router = useRouter()
  const { getDocument } = useGetDocument()

  const [discography, setDiscography] = useState<any>({
    name: "",
    alternateName: "",
    totalTrack: "",
    image: "",
    releaseDate: "",
    type: "",
    language: "",
    video: "",
    description: "",
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setDiscography({ ...discography, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getDocument("discography", params.id).then(data => setDiscography(data))
  }, [])

  const updateDocument = useUpdateDocument()

  const handleInput = () => {
    try {
      updateDocument("discography", params.id, discography)
      router.push("/admin")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main className="mx-16 mb-16">
      <h1 className="text-2xl font-bold mt-8">Edit Discography</h1>
      <form action="" className="w-1/2 mt-4">
        <div className="flex justify-between my-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={discography?.name}
            onChange={onChange}
            placeholder="ex: Feel Special"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Alternate Name</label>
          <input
            type="text"
            name="alternateName"
            value={discography?.alternateName}
            onChange={onChange}
            placeholder="ex: The 5th Mini Album"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Total Track</label>
          <input
            type="number"
            name="totalTrack"
            value={discography?.totalTrack}
            onChange={onChange}
            placeholder="Total track"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={discography?.image}
            onChange={onChange}
            placeholder="Put the link to the image"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Release Date</label>
          <input
            type="text"
            name="releaseDate"
            value={discography?.releaseDate}
            onChange={onChange}
            placeholder="Release date (YYYY-MM-DD)"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Type</label>
          <select name="type" id="type" value={discography?.type} onChange={onChange}>
            <option value="">Choose</option>
            <option value="Full Album">Full Album</option>
            <option value="Mini Album">Mini Album</option>
            <option value="Special Album">Special Album</option>
            <option value="Single">Single</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label>Language</label>
          <select name="language" id="language" value={discography?.language} onChange={onChange}>
            <option value="">Choose</option>
            <option value="Korean">Korean</option>
            <option value="Japanese">Japanese</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="flex justify-between my-2">
          <label>Video</label>
          <input
            type="text"
            name="video"
            value={discography?.video}
            onChange={onChange}
            placeholder="Title track YouTube link"
            className="px-2"
          />
        </div>
        <div className="flex justify-between my-2">
          <label>Description</label>
          <textarea
            name="description"
            value={discography?.description}
            onChange={onChange}
            placeholder="Discography description"
            className="px-2 h-[150px]"
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