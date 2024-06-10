"use client"

import { auth } from "@/app/utils/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Page = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      router.push("/admin");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-16">Login</h1>
      <form className="relative w-1/4 flex flex-col items-center">
        <div className="mb-4 self-start">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="absolute right-0"
            value={form.email}
            onChange={onChange}
          />
        </div>
        <div className="self-start">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="absolute right-0"
            value={form.password}
            onChange={onChange}
          />
        </div>
        <div>
          <Link href="/register">
            <button type="button" className="bg-cream text-white p-2 mt-8 mx-2 rounded">Register</button>
          </Link>
          <button onClick={handleLogin} type="button" className="bg-primary-pink text-white p-2 mt-8 mx-2 rounded">
            Login
          </button>
        </div>
      </form>
    </main>
  )
}

export default Page