'use client'

import { useState } from 'react'
import { useAddDocument } from '@/app/lib/utils/useAddDocument'
import { useRouter } from 'next/navigation'
import {
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd'
import { HistoryType } from '@/app/lib/types/firebase'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { PlusOutlined } from '@ant-design/icons'

const Page = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [date, setDate] = useState<string | string[]>('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [imageFile, setImageFile] = useState<File | null>()
  const storage = getStorage()

  const propsImage: UploadProps = {
    onRemove: () => {
      if (imageFile) {
        setImageFile(null)
      }
    },
    beforeUpload: (file) => {
      setImageFile(file)

      return false
    },
    accept: 'image/*',
    maxCount: 1,
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
      if (imageFile) {
        const storageRef = ref(storage, 'history/' + imageFile.name)
        uploadBytes(storageRef, imageFile).then((snapshot) => {
          addDocument('histories', {
            ...form.getFieldsValue(),
            image:
              'https://firebasestorage.googleapis.com/v0/b/' +
              snapshot.metadata.bucket +
              '/o/history%2F' +
              snapshot.metadata.name +
              '?alt=media',
            date: date,
          }).then(() => router.push('/admin/history'))
        })
      }
    } catch (error: any) {
      alert('Add History Failed ' + error.message)
    }
  }

  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setDate(dateString)
  }

  return (
    <main className="w-full flex flex-col items-center mb-16">
      <h1 className="w-full text-center text-2xl font-bold my-8">
        Add New History
      </h1>
      <div className="w-1/2 flex justify-center">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="w-[75%]"
        >
          <Form.Item<HistoryType>
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
            className="w-full mr-2"
          >
            <Input className="h-12 rounded-lg" placeholder="Title" />
          </Form.Item>

          <div className="flex">
            <Form.Item<HistoryType>
              name="image"
              label="History Image"
              className="w-1/2"
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                {...propsImage}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>

            <Form.Item<HistoryType>
              name="date"
              label="Date"
              rules={[
                {
                  required: true,
                  message: 'Please input the date!',
                },
              ]}
              className="w-1/2 mr-2"
            >
              <DatePicker onChange={onChange} />
            </Form.Item>
          </div>

          <Form.Item<HistoryType>
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please input the history description!',
              },
            ]}
          >
            <Input.TextArea
              className="h-12 rounded-lg"
              placeholder="History Description"
              rows={8}
            />
          </Form.Item>

          <Form.Item>
            <button
              className="w-full px-4 py-2 rounded-md bg-primary-pink text-white text-lg"
              type="submit"
            >
              Add History
            </button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Page
