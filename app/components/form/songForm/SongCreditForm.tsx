import { MemberType } from '@/app/lib/types/firebase'
import { Form, FormInstance, Input, Select } from 'antd'

const { Option } = Select

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
          <Select
            style={{ width: '100%' }}
            className="h-12 rounded-lg"
            placeholder="Choose Member"
          >
            <Option key="Im Nayeon" value="Im Nayeon">
              Im Nayeon
            </Option>
            <Option key="Yoo Jeongyeon" value="Yoo Jeongyeon">
              Yoo Jeongyeon
            </Option>
            <Option key="Hirai Momo" value="Hirai Momo">
              Hirai Momo
            </Option>
            <Option key="Minatozaki Sana" value="Minatozaki Sana">
              Minatozaki Sana
            </Option>
            <Option key="Park Jihyo" value="Park Jihyo">
              Park Jihyo
            </Option>
            <Option key="Myoi Mina" value="Myoi Mina">
              Myoi Mina
            </Option>
            <Option key="Kim Dahyun" value="Kim Dahyun">
              Kim Dahyun
            </Option>
            <Option key="Son Chaeyoung" value="Son Chaeyoung">
              Son Chaeyoung
            </Option>
            <Option key="Chou Tzuyu" value="Chou Tzuyu">
              Chou Tzuyu
            </Option>
          </Select>
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
