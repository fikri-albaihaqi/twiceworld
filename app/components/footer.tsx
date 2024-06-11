import Image from "next/image"
import Link from "next/link"
import Socials from "./socials"

export default function Footer() {
  return(
    <footer className="relative w-screen bottom-0 h-[256px] bg-primary-black flex justify-evenly items-center text-white">
      <Image src="/twice-logo.svg" alt="Twiceland Logo" width={0} height={0} 
        className="w-[64px] md:w-[128px]"
      />
      
      <div className="flex">
        <ul className="flex flex-col justify-center mx-4 w-[100px] before:content-[''] before:absolute before:bg-white before:w-[2px] 
          before:h-[150px]">
          <li className="ml-4 hover:text-cream"><Link href="/">Home</Link></li>
          <li className="ml-4 hover:text-cream"><Link href="/history">History</Link></li>
          <li className="ml-4 hover:text-cream"><Link href="/discography">Discography</Link></li>
        </ul>
      
        <Socials vertical={true} />
      </div>
    </footer>
  )
}