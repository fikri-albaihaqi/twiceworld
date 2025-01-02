'use client'

import { MemberType } from '@/app/lib/types/firebase'
import { Form, FormInstance, Input } from 'antd'

const SongCreditForm = ({
  form,
  credits,
  handleSetCredits,
}: {
  form: FormInstance<any>
  credits: MemberType[]
  handleSetCredits: (data: MemberType) => void
}) => {

  const handleAddCredit = () => {
    handleSetCredits({ memberName: form.getFieldValue('memberName') })
  }

  return (
    <>
      <div className="flex items-end">
        <Form.Item<MemberType>
          name="memberName"
          label="Member Credits"
          rules={[
            { required: true, message: 'Please input the song duration!' },
          ]}
          className="w-full mr-2"
        >
          <Input className="h-12 rounded-lg" placeholder="Member Name" />
        </Form.Item>

        <Form.Item>
          <button
            className="w-max self-end bg-primary-pink text-white p-2 mt-2 rounded"
            onClick={handleAddCredit}
            type='button'
          >
            Add
          </button>
        </Form.Item>
      </div>

      <ol className="self-end list-decimal">
        {credits?.map((item: any, index: number) => (
          <li key={index}>{item.memberName}</li>
        ))}
      </ol>
    </>
  )
}

export default SongCreditForm
