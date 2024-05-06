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
        <Image src="/twice-logo.svg" width={0} height={0} alt="Twice logo" className="py-4 w-[48px] md:w-[64px]" />
        <div className="flex py-8">
          <ul className="hidden md:flex mx-8">
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#EB8038"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#EB8038"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#EB8038"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#EB8038"}} />
            </a>
            <a href="" className="mx-2">
              <FontAwesomeIcon icon={faTiktok} size="lg" style={{color: "#EB8038"}} />
            </a>
          </ul>
          <div 
            onClick={toggleShow}
            className={`${show ? 'fixed right-8 top-10' : 'relative'} z-20 group stroke-white cursor-pointer`}
          >
            <span
              className={`w-[48px] h-[24px] bg-none relative inline-flex text-white 
                before:content-[''] before:w-full before:h-[2px] before:absolute before:bg-primary-orange
                after:content-[''] after:right-0 after:h-[2px] after:absolute 
                after:bg-primary-orange group-hover:after:w-full after:transition-all
                ${show ? 'before:rotate-45 after:-rotate-45 after:top-0 after:bottom-auto after:w-full' 
                : 'before:rotate-0 after:rotate-0 after:top-auto after:bottom-0 after:w-[72%]'}`}
            ></span>
          </div>
        </div>
      </nav>
      <div 
        className="hidden fixed overflow-hidden items-center z-10 w-screen md:w-[50%] lg:w-[40%] h-screen right-0 
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] bg-white"
        style={{
          display: show ? 'flex' : 'none'
        }}
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
        <ul className="flex absolute top-8">
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

          <ul className={`text-4xl xl:text-6xl text-alternate-black font-semibold`}>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="/history">History</Link>
            </li>
            <li className={`my-4 ${styles.menuItem}`}>
              <Link href="">Discography</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}