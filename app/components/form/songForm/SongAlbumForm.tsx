import { SongOrderType } from '@/app/lib/types/firebase'
import { Form, FormInstance, Input } from 'antd'

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
  const handleAddSongAlbumPosition = () => {
    handleSetSongAlbum(form.getFieldValue('album'))

    handleSetSongAlbumPosition({
      album: form.getFieldValue('album'),
      position: form.getFieldValue('position'),
    })

    form.resetFields(['album', 'position'])
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
