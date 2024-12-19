'use client'

import { useState } from 'react'
import { useAddDocument } from '@/app/lib/utils/useAddDocument'
import { useRouter } from 'next/navigation'
import {
  DatePicker,
  DatePickerProps,
  Form,
  Image,
  Input,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd'
import { DiscographyType } from '@/app/lib/types/firebase'
import { FileType } from '@/app/lib/types/field'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const Page = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [releaseDate, setReleaseDate] = useState<string | string[]>('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  const addDocument = useAddDocument()

  const onFinish = () => {
    try {
      addDocument('discography', {
        ...form.getFieldsValue(),
        releaseDate: releaseDate,
      })
      router.push('/admin')
    } catch (error: any) {
      alert('Add Album Failed ' + error.message)
    }
  }

  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setReleaseDate(dateString)
  }

  return (
    <main className="w-full flex flex-col items-center mb-16">
      <h1 className="w-full text-center text-2xl font-bold my-8">
        Add New Album
      </h1>
      <div className="w-1/2 flex justify-center">
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

          <div className="flex">
            <Form.Item<DiscographyType>
              name="image"
              label="Album Cover"
              rules={[
                { required: true, message: 'Please input the album cover!' },
              ]}
              className="w-1/2"
            >
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{ display: 'none' }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(''),
                  }}
                  src={previewImage}
                  alt="Album cover preview image"
                />
              )}
            </Form.Item>

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
          </div>

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
