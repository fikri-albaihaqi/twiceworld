import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return(
    <footer className="absolute w-screen left-0 mt-32 h-[256px] bg-primary-orange flex justify-evenly text-white">
      <Image src="/next.svg" alt="Twiceland Logo" width={128} height={128} />
      
      <div className="flex">
        <ul className="flex flex-col justify-center mx-4 w-[100px] before:content-[''] before:absolute before:bg-white before:w-[2px] 
          before:h-[100px]">
          <li className="ml-4"><Link href="/">Home</Link></li>
          <li className="ml-4"><Link href="/">History</Link></li>
          <li className="ml-4"><Link href="/">Members</Link></li>
          <li className="ml-4"><Link href="/">Discography</Link></li>
        </ul>
      
        <ul className="flex flex-col justify-center mx-4 w-[100px] before:content-[''] before:absolute before:bg-white before:w-[2px] 
          before:h-[100px]">
          <li className="ml-4">
            <Image src="/Youtube.svg" width={24} height={24} alt="Youtube logo" />
          </li>
          <li className="ml-4">
            <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
          </li>
          <li className="ml-4">
            <Image src="/Twitter.svg" width={24} height={24} alt="Twitter logo" />
          </li>
          <li className="ml-4">
            <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
          </li>
        </ul>
      </div>
    </footer>
  )
}