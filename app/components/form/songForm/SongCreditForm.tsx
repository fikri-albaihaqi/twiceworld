import { MemberType } from '@/app/lib/types/firebase'
import { Form, FormInstance, Input } from 'antd'

const SongCreditForm = ({
  form,
  credits,
  handleSetCredits,
  handleRemoveCredits,
}: {
  form: FormInstance<any>
  credits: MemberType[]
  handleSetCredits: (data: MemberType) => void
  handleRemoveCredits: (index: number) => void
}) => {
  const handleAddCredit = () => {
    handleSetCredits({ memberName: form.getFieldValue('memberName') })
    form.resetFields(['memberName'])
  }

  return (
    <>
      <div className="flex items-end">
        <Form.Item<MemberType>
          name="memberName"
          label="Member Credits"
          className="w-full mr-2"
        >
          <Input className="h-12 rounded-lg" placeholder="Member Name" />
        </Form.Item>

        <Form.Item>
          <button
            className="w-max self-end bg-primary-pink text-white p-2 mt-2 rounded"
            onClick={handleAddCredit}
            type="button"
          >
            Add
          </button>
        </Form.Item>
      </div>

      <ol className="self-end list-decimal mb-8">
        {credits?.map((item: any, index: number) => (
          <li key={index} className="mb-2">
            {item.memberName}
            <button
              className="w-max self-end bg-red-500 text-white p-2 ml-2 rounded"
              onClick={() => handleRemoveCredits(index)}
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

export default SongCreditForm
