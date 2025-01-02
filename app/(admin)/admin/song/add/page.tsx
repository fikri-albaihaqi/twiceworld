'use client'

import { useState } from 'react'
import { useAddDocument } from '@/app/lib/utils/useAddDocument'
import { useRouter } from 'next/navigation'
import { Form, Input } from 'antd'
import { MemberType, SongOrderType, TrackType } from '@/app/lib/types/firebase'
import SongCreditForm from '@/app/components/form/songForm/SongCreditForm'
import SongAlbumForm from '@/app/components/form/songForm/SongAlbumForm'

const Page = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [credits, setCredits] = useState<MemberType[]>([])
  const [songAlbum, setSongAlbum] = useState<string[]>([])
  const [songAlbumPosition, setSongAlbumPosition] = useState<SongOrderType[]>(
    []
  )

  const addDocument = useAddDocument()

  const handleSetCredits = (data: MemberType) => {
    setCredits([...credits, data])
  }

  const handleSetSongAlbum = (data: string) => {
    setSongAlbum([...songAlbum, data])
  }

  const handleSetSongAlbumPosition = (data: SongOrderType) => {
    setSongAlbumPosition([...songAlbumPosition, data])
  }

  const onFinish = () => {
    try {
      const { memberName, album, position, ...song } = form.getFieldsValue()

      if (songAlbum.length !== 0 && songAlbumPosition.length !== 0) {
        addDocument('songs', {
          title: song.title,
          duration: song.duration,
          albums: songAlbum,
          memberCredits: credits,
          order: songAlbumPosition,
        })

        router.push('/admin/song')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main className="w-full flex flex-col items-center mb-16">
      <h1 className="w-full text-center text-2xl font-bold my-8">
        Add New Song
      </h1>
      <div className="w-1/2 flex justify-center">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="w-[75%]"
        >
          <div className="flex">
            <Form.Item<TrackType>
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the title!' }]}
              className="w-1/2 mr-2"
            >
              <Input className="h-12 rounded-lg" placeholder="Title" />
            </Form.Item>

            <Form.Item<TrackType>
              name="duration"
              label="Duration"
              rules={[
                { required: true, message: 'Please input the song duration!' },
              ]}
              className="w-full mr-2"
            >
              <Input className="h-12 rounded-lg" placeholder="Title" />
            </Form.Item>
          </div>

          <SongCreditForm
            form={form}
            credits={credits}
            handleSetCredits={handleSetCredits}
          />

          <SongAlbumForm
            form={form}
            songAlbumPosition={songAlbumPosition}
            handleSetSongAlbum={handleSetSongAlbum}
            handleSetSongAlbumPosition={handleSetSongAlbumPosition}
          />

          <Form.Item>
            <button
              className="w-full px-4 py-2 rounded-md bg-primary-pink text-white text-lg"
              type="submit"
            >
              Add Song
            </button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Page
