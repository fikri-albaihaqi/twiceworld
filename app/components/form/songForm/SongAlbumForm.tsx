'use client'

import { DiscographyType, SongOrderType } from '@/app/lib/types/firebase'
import db from '@/app/lib/utils/firestore'
import { useGetAllDocuments } from '@/app/lib/utils/useGetAllDocuments'
import { collection, orderBy, query } from '@firebase/firestore'
import { Form, FormInstance, Input } from 'antd'
import { useEffect, useRef, useState } from 'react'

const SongAlbumForm = ({
  form,
  songAlbumPosition,
  handleSetSongAlbum,
  handleSetSongAlbumPosition,
  handleRemoveSongAlbum,
}: {
  form: FormInstance<any>
  songAlbumPosition: SongOrderType[]
  handleSetSongAlbum: (data: string) => void
  handleSetSongAlbumPosition: (data: SongOrderType) => void
  handleRemoveSongAlbum: (index: number) => void
}) => {
  const [discography, setDiscography] = useState<DiscographyType[]>([])
  const [albumName, setAlbumName] = useState('')
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const collectionRef = collection(db, "discography")
  const dbQuery = query(collectionRef, orderBy("releaseDate", "desc"))

  const { getAllDocuments } = useGetAllDocuments()

  useEffect(() => {
    getAllDocuments(dbQuery).then(data => setDiscography(data))
  }, [])

  const onFocus = () => {
    setShowDropdown(true)
  }

  const handleSelectAlbum = (name: string) => {
    setAlbumName(name)
    setShowDropdown(false)
    form.setFieldValue('album', name)
  }

  const handleAddSongAlbumPosition = () => {
    if (albumName && form.getFieldValue('position')) {
      handleSetSongAlbum(form.getFieldValue('album'))

      handleSetSongAlbumPosition({
        album: form.getFieldValue('album'),
        position: form.getFieldValue('position'),
      })

      form.resetFields(['album', 'position'])
      setAlbumName('')
    }
  }
  return (
    <>
      <div className="flex items-end">
        <Form.Item<SongOrderType>
          name="album"
          label="Album Name"
          className="w-full mr-2"
        >
          <div>
            <Input
              className="h-12 rounded-lg"
              placeholder="Album Name"
              value={albumName}
              onFocus={onFocus}
            />

            <div
              className={`${
                showDropdown ? 'block' : 'hidden'
              } w-full h-[240px] absolute z-10 p-1 overflow-x-auto bg-white rounded-lg`}
            >
              <ul>
                {discography.map((album, index) => (
                  <li
                    onClick={() => handleSelectAlbum(album.name)}
                    key={index}
                    className="p-2 hover:bg-slate-200"
                  >
                    {album.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Form.Item>

        <Form.Item<SongOrderType>
          name="position"
          label="Track Order"
          className="w-full mr-2"
        >
          <Input
            className="h-12 rounded-lg"
            placeholder="Track Order on The Album"
          />
        </Form.Item>

        <Form.Item>
          <button
            onClick={handleAddSongAlbumPosition}
            className="w-max self-end bg-primary-pink text-white p-2 mt-2 rounded"
            type="button"
          >
            Add
          </button>
        </Form.Item>
      </div>

      <ol className="self-end list-decimal mb-8">
        {songAlbumPosition?.map((item: any, index: number) => (
          <li key={index} className="flex mb-2">
            <div>
              {item.album} <br />
              Position: {item.position}
            </div>
            <button
              className="w-max self-end bg-red-500 text-white p-2 ml-2 rounded"
              onClick={() => handleRemoveSongAlbum(index)}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}

export default SongAlbumForm
