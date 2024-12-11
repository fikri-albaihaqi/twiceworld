'use client'

import { LoginFieldType } from '@/app/lib/types/field'
import { auth } from '@/app/lib/utils/firebaseConfig'
import { Form, FormProps, Input, message } from 'antd'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = async (values: LoginFieldType) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      router.push('/admin')
    } catch (error: any) {
      messageApi.open({
        type: 'error',
        content: 'Login Failed ' + error.message,
      })
    }
  }

  const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      {contextHolder}
      <div className="w-[600px] flex flex-col items-center justify-center p-8 rounded-xl drop-shadow-xl bg-white">
        <h1 className="text-3xl font-bold mb-16">Login</h1>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-[75%]"
        >
          <Form.Item<LoginFieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className="h-12 rounded-lg" placeholder="Email" />
          </Form.Item>

          <Form.Item<LoginFieldType>
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
              className="w-full px-4 py-2 rounded-md bg-primary-pink text-white"
              type="submit"
            >
              Sign In
            </button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Page
