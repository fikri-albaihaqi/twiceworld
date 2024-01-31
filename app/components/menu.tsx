'use client'

import Image from "next/image"
import { useState } from "react"
import Link from "next/link";
import styles from './Menu.module.css'

export default function Menu() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <nav className="flex justify-between py-8 px-16 absolute w-screen top-0">
        <Image src="/next.svg" width={128} height={128} alt="Twiceland logo" />
        <div className="flex">
          <ul className="flex mx-8">
            <a href="" className="mx-2">
              <Image src="/Youtube.svg" width={24} height={24} alt="Youtube logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Twitter.svg" width={24} height={24} alt="Twitter logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
            </a>
          </ul>
          <div 
            onClick={toggleShow}
            className={`${show ? 'fixed right-8 top-10' : 'relative'} z-20 group stroke-white cursor-pointer`}
          >
            <span
              className={`w-[48px] h-[24px] bg-none relative inline-flex text-white 
                before:content-[''] before:w-full before:h-[2px] before:absolute before:bg-alternate-black
                after:content-[''] after:right-0 after:h-[2px] after:absolute 
                after:bg-alternate-black group-hover:after:w-full after:transition-all
                ${show ? 'before:rotate-45 after:-rotate-45 after:top-0 after:bottom-auto after:w-full' 
                : 'before:rotate-0 after:rotate-0 after:top-auto after:bottom-0 after:w-[72%]'}`}
            ></span>
          </div>
        </div>
      </nav>
      <div 
        className="hidden fixed overflow-y-hidden items-center z-10 w-screen h-screen 
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 bg-amber-100 to-rose-200 top-0"
        style={{
          display: show ? 'flex' : 'none'
        }}
      >
        <div className="w-[65%] h-screen bg-[url('/the-feels.jpg')] bg-cover"></div>
        <div className="flex flex-col ml-16">
          <Image className="absolute top-8" src="/next.svg" width={128} height={128} alt="Twiceland logo" />

          <ul className={`text-6xl text-alternate-black font-semibold`}>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/history">History</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="">Members</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="">Discography</Link>
            </li>
          </ul>

          <ul className="flex absolute bottom-8">
            <a href="" className="mx-2">
              <Image src="/Youtube.svg" width={24} height={24} alt="Youtube logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Twitter.svg" width={24} height={24} alt="Twitter logo" />
            </a>
            <a href="" className="mx-2">
              <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}