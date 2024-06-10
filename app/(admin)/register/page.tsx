"use client"

import { auth } from "@/app/utils/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Register = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-16">Register</h1>
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
        <button onClick={handleRegister} type="button" className="bg-primary-pink text-white w-min p-2 mt-8 rounded">
          Register
        </button>
      </form>
    </main>
  )
}

export default Register