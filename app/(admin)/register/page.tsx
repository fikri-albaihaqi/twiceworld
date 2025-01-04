'use client'

import { AuthFieldType } from '@/app/lib/types/field'
import { auth } from '@/app/lib/utils/firebaseConfig'
import { Form, FormProps, Input, message } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = async (values: AuthFieldType) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
      router.push('/login')
    } catch (error: any) {
      messageApi.open({
        type: 'error',
        content: 'Register Failed ' + error.message,
      })
    }
  }

  const onFinishFailed: FormProps<AuthFieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      {contextHolder}
      <div className="w-[600px] flex flex-col items-center justify-center p-8 rounded-xl drop-shadow-xl bg-white">
        <h1 className="text-3xl font-bold mb-16">Register</h1>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-[75%]"
        >
          <Form.Item<AuthFieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className="h-12 rounded-lg" placeholder="Email" />
          </Form.Item>

          <Form.Item<AuthFieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              className="h-12 rounded-lg"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <button
              className="w-full px-4 py-2 rounded-md bg-primary-pink text-white text-lg"
              type="submit"
            >
              Register
            </button>
          </Form.Item>
        </Form>
        <Link
          href="/login"
          className="w-[75%] px-4 py-2 rounded-md border-gray-400 border-[1px] text-center"
        >
          Back To Sign In
        </Link>
      </div>
    </main>
  )
}

export default Register
