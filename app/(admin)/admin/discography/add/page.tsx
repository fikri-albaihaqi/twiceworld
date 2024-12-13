'use client'

import { useState } from 'react'
import { useAddDocument } from '@/app/lib/utils/useAddDocument'
import { useRouter } from 'next/navigation'
import { DatePicker, DatePickerProps, Form, Input, Select } from 'antd'
import { DiscographyType } from '@/app/lib/types/firebase'

const { Option } = Select

const Page = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [scheduleDate, setScheduleDate] = useState<string | string[]>('')

  const addDocument = useAddDocument()

  const onFinish = () => {
    try {
      addDocument('discography', {
        ...form.getFieldsValue(),
        releaseDate: scheduleDate,
      })
      router.push('/admin')
    } catch (error: any) {
      alert('Add Album Failed ' + error.message)
    }
  }

  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setScheduleDate(dateString)
  }

  return (
    <main className="mx-16 mb-16">
      <h1 className="text-2xl font-bold mt-8">Add New Album</h1>
      <div className="w-1/2">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="w-[75%]"
        >
          <div className="flex">
            <Form.Item<DiscographyType>
              name="name"
              label="Album Name"
              rules={[
                { required: true, message: 'Please input the album name!' },
              ]}
              className="w-1/2 mr-2"
            >
              <Input className="h-12 rounded-lg" placeholder="Album Name" />
            </Form.Item>

            <Form.Item<DiscographyType>
              name="alternateName"
              label="Alternate Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the album alternate name!',
                },
              ]}
              className="w-1/2"
            >
              <Input
                className="h-12 rounded-lg"
                placeholder="Album Alternate Name"
              />
            </Form.Item>
          </div>

          <div className="flex">
            <Form.Item<DiscographyType>
              name="totalTrack"
              label="Total Track"
              rules={[
                {
                  required: true,
                  message: 'Please input the album total track!',
                },
              ]}
              className="w-1/2 mr-2"
            >
              <Input
                className="h-12 rounded-lg"
                placeholder="Album Total Track"
              />
            </Form.Item>

            <Form.Item<DiscographyType>
              name="image"
              label="Album Cover"
              rules={[
                { required: true, message: 'Please input the album cover!' },
              ]}
              className="w-1/2"
            >
              <Input className="h-12 rounded-lg" placeholder="Album Cover" />
            </Form.Item>
          </div>

          <Form.Item<DiscographyType>
            name="releaseDate"
            label="Release Date"
            rules={[
              {
                required: true,
                message: 'Please input the album release date!',
              },
            ]}
            className="w-1/2 mr-2"
          >
            <DatePicker onChange={onChange} />
          </Form.Item>

          <div className="flex">
            <Form.Item<DiscographyType>
              name="type"
              label="Type"
              rules={[
                { required: true, message: 'Please input the album type' },
              ]}
              className="w-1/2 mr-2"
            >
              <Select
                style={{ width: '100%' }}
                className="h-12 rounded-lg"
                placeholder="Choose Release Type"
              >
                <Option key="Full Album" value="Full Album">
                  Full Album
                </Option>
                <Option key="Mini Album" value="Mini Album">
                  Mini Album
                </Option>
                <Option key="Special Album" value="Special Album">
                  Special Album
                </Option>
                <Option key="Single" value="Single">
                  Single
                </Option>
              </Select>
            </Form.Item>

            <Form.Item<DiscographyType>
              name="language"
              label="Language"
              rules={[
                { required: true, message: 'Please input the album language!' },
              ]}
              className="w-1/2"
            >
              <Select
                style={{ width: '100%' }}
                className="h-12 rounded-lg"
                placeholder="Choose Release Type"
              >
                <Option key="Korean" value="Korean">
                  Korean
                </Option>
                <Option key="Japanese" value="Japanese">
                  Japanese
                </Option>
                <Option key="English" value="English">
                  English
                </Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item<DiscographyType>
            name="video"
            label="Music Video Link"
            rules={[
              {
                required: true,
                message: 'Please input the album music video link!',
              },
            ]}
            className="w-1/2"
          >
            <Input
              className="h-12 rounded-lg"
              placeholder="Album Music Video Link"
            />
          </Form.Item>

          <Form.Item<DiscographyType>
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please input the album description!',
              },
            ]}
          >
            <Input.TextArea
              className="h-12 rounded-lg"
              placeholder="Album Description"
              rows={8}
            />
          </Form.Item>
          <Form.Item>
            <button
              className="w-full px-4 py-2 rounded-md bg-primary-pink text-white text-lg"
              type="submit"
            >
              Tambah Album
            </button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Page
