'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link";
import styles from './Menu.module.css'
import { usePathname } from "next/navigation"
import Socials from "./socials"

export default function Menu() {
  const [show, setShow] = useState(false);
  const pathname = usePathname()

  const toggleShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (show) {
      setShow(!show)
    }
  }, [pathname])

  return (
    <>
      <Link href="/" className="fixed z-10 top-0 ml-8 py-4" >
        <Image src="/logo.png" alt="Twice logo" width={100} height={100} />
      </Link>
      <Image src="/blue-sticker.png" alt="Menu background" width={128} height={0} className="fixed top-0 right-0 z-40" />
      <div className="fixed top-0 right-8 z-50 flex py-8">
        <div
          onClick={toggleShow}
          className={`${show ? 'fixed right-8 top-10' : 'relative'} group stroke-white cursor-pointer`}
        >
          <span
            className={`w-[48px] h-[24px] bg-none relative inline-flex text-white 
              before:content-[''] before:w-full before:h-[4px] before:absolute
              after:content-[''] after:right-0 after:h-[4px] after:absolute 
              group-hover:after:w-full after:transition-all
              ${show ? 'before:bg-white after:bg-white before:rotate-45 after:-rotate-45 after:top-0 after:bottom-auto after:w-full'
                : 'before:bg-white before:rotate-0 after:bg-white after:rotate-0 after:top-auto after:bottom-0 after:w-[72%]'}`}
          ></span>
        </div>
      </div>

      <div
        className={`fixed overflow-hidden items-center z-30 h-screen right-0 
          bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] bg-white ${show ? styles.show : styles.hide}`}
      >
        <Image src="/mail.png" alt="Mail Sticker" width={128} height={0}
          className="absolute left-16 top-20 -rotate-[20deg]"
        />
        <Image src="/smiley-1.png" alt="Mail Sticker" width={64} height={0}
          className="absolute right-8 mb-24"
        />
        <Image src="/candy.png" alt="Mail Sticker" width={64} height={0}
          className="absolute left-16 bottom-24 rotate-[20deg]"
        />
        <Image src="/sky-2.png" alt="Mail Sticker" width={320} height={0}
          className="absolute right-0 bottom-0"
        />
        <div className="flex flex-col ml-8 md:ml-16">
          <Socials vertical={false} />

          <ul className={`text-4xl xl:text-6xl text-alternate-black font-semibold`}>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/history">History</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/discography">Discography</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}