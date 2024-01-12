'use client'

import Image from "next/image"
import { josefin } from "@/app/assets/fonts"
import { useState } from "react"

export default function Menu() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <nav className="flex justify-between p-8 absolute w-screen">
        <Image src="/next.svg" width={128} height={128} alt="Twiceland logo" />
        <div className="flex">
          <ul className="flex mx-8">
            <li className="px-2">
              <Image src="/Youtube.svg" width={24} height={24} alt="Youtube logo" />
            </li>
            <li className="px-2">
              <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
            </li>
            <li className="px-2">
              <Image src="/Twitter.svg" width={24} height={24} alt="Twitter logo" />
            </li>
            <li className="px-2">
              <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
            </li>
          </ul>
          <div 
            onClick={toggleShow}
            className="relative z-20 group stroke-white cursor-pointer"
          >
            <a href="#"
              className={`w-[48px] h-[24px] bg-none relative inline-flex text-white 
                before:content-[''] before:w-full before:h-[2px] before:absolute before:bg-alternate-black
                after:content-[''] after:right-0 after:h-[2px] after:absolute 
                after:bg-alternate-black group-hover:after:w-full after:transition-all
                ${show ? 'before:rotate-45 after:-rotate-45 after:top-0 after:bottom-auto after:w-full' 
                : 'before:rotate-0 after:rotate-0 after:top-auto after:bottom-0 after:w-[72%]'}`}
            ></a>
          </div>
        </div>
      </nav>
      <div 
        className="hidden absolute flex items-center z-10 w-screen h-screen 
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 bg-amber-100 to-rose-200"
        style={{
          display: show ? 'flex' : 'none'
        }}
      >
        <div className="w-[65%] h-screen bg-[url('/the-feels.jpg')] bg-cover"></div>
        <div className="flex flex-col ml-16">
          <Image className="absolute top-8" src="/next.svg" width={128} height={128} alt="Twiceland logo" />

          <ul className={`text-6xl text-alternate-black font-semibold ${josefin.className}`}>
            <li className="py-4">Home</li>
            <li className="py-4">Members</li>
            <li className="py-4">History</li>
            <li className="py-4">Discography</li>
          </ul>

          <ul className="flex absolute bottom-8">
            <li className="px-2">
              <Image src="/Youtube.svg" width={24} height={24} alt="Youtube logo" />
            </li>
            <li className="px-2">
              <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
            </li>
            <li className="px-2">
              <Image src="/Twitter.svg" width={24} height={24} alt="Twitter logo" />
            </li>
            <li className="px-2">
              <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}