'use client'

import { SongOrderType } from '@/app/lib/types/firebase'
import { Form, FormInstance, Input } from 'antd'

const SongAlbumForm = ({
  form,
  songAlbumPosition,
  handleSetSongAlbum,
  handleSetSongAlbumPosition,
}: {
  form: FormInstance<any>
  songAlbumPosition: SongOrderType[]
  handleSetSongAlbum: (data: string) => void
  handleSetSongAlbumPosition: (data: SongOrderType) => void
}) => {
  const handleAddSongAlbumPosition = () => {
    handleSetSongAlbum(form.getFieldValue('album'))

    handleSetSongAlbumPosition({
      album: form.getFieldValue('album'),
      position: form.getFieldValue('position'),
    })

    form.resetFields(["album", "position"])
  }
  return (
    <>
      <div className="flex items-end">
        <Form.Item<SongOrderType>
          name="album"
          label="Album Name"
          className="w-full mr-2"
        >
          <Input className="h-12 rounded-lg" placeholder="Album Name" />
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

      <ol className="self-end list-decimal">
        {songAlbumPosition?.map((item: any, index: number) => (
          <li key={index}>{item.album}</li>
        ))}
      </ol>
    </>
  )
}

export default SongAlbumForm
