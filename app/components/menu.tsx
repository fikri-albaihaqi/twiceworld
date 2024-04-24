'use client'

import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
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
      <nav className="flex justify-between px-8 md:px-16 absolute w-screen top-0">
        <Image src="/twice-logo.svg" width={64} height={64} alt="Twice logo" className="py-4" />
        <div className="flex py-8">
          <ul className="hidden md:flex mx-8">
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faTiktok} size="lg" style={{color: "#3D3C3A"}} />
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
          <Image className="absolute top-4" src="/twice-logo.svg" width={64} height={64} alt="Twice logo" />

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
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#3D3C3A"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faTiktok} size="lg" style={{color: "#3D3C3A"}} />
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}