import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faFacebookF, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return(
    <footer className="relative w-screen bottom-0 h-[256px] bg-primary-black flex justify-evenly items-center text-white">
      <Image src="/twice-logo.svg" alt="Twiceland Logo" width={0} height={0} 
        className="w-[64px] md:w-[128px]"
      />
      
      <div className="flex">
        <ul className="flex flex-col justify-center mx-4 w-[100px] before:content-[''] before:absolute before:bg-white before:w-[2px] 
          before:h-[150px]">
          <li className="ml-4 hover:text-alternate-black"><Link href="/">Home</Link></li>
          <li className="ml-4 hover:text-alternate-black"><Link href="/">History</Link></li>
          <li className="ml-4 hover:text-alternate-black"><Link href="/">Members</Link></li>
          <li className="ml-4 hover:text-alternate-black"><Link href="/">Discography</Link></li>
        </ul>
      
        <ul className="relative flex flex-col justify-center items-center mx-4 w-[100px] before:content-[''] before:absolute before:bg-white before:w-[2px] 
          before:h-[150px] before:left-0">
          <a href="" className="my-0.5">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffff"}} />
          </a>
          <a href="" className="my-0.5">
            <FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#ffff"}} />
          </a>
          <a href="" className="my-0.5">
            <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#ffff"}} />
          </a>
          <a href="" className="my-0.5">
            <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ffff"}} />
          </a>
          <a href="" className="my-0.5">
            <FontAwesomeIcon icon={faTiktok} size="lg" style={{color: "#ffff"}} />
          </a>
        </ul>
      </div>
    </footer>
  )
}