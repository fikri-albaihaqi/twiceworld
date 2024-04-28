import { bungee } from "@/app/assets/fonts"
import Link from "next/link"
import Image from "next/image"
import Album from "./components/album"

export default function Page() {
  const albums = [
    {
      id: 1,
      name: "Zone",
      img: "/alb-zone.jpg"
    },
    {
      id: 2,
      name: "Ready To Be",
      img: "/alb-rtb.jpg"
    },
    {
      id: 3,
      name: "Between 1&2",
      img: "/alb-between.jpg"
    },
    {
      id: 4,
      name: "Im Nayeon",
      img: "/alb-nayeon.jpg"
    },
    {
      id: 5,
      name: "Formula of Love: O+T=<3",
      img: "/alb-fol.jpg"
    },
    {
      id: 6,
      name: "Taste of Love",
      img: "/alb-tol.jpg"
    }
  ]

  return (
    <main className="">
      <header className="relative -z-10 h-[500px] md:h-[440px] lg:h-[900px]">
        <Image src="/header.png" alt="Header Image with twice members in it" fill={true}
          className="hidden md:block -z-10 object-contain object-top"
        />
        <Image src="/header-mobile.png" alt="Header Image with twice members in it" fill={true}
          className="absolute md:hidden -z-10 object-contain object-top"
        />
      </header>
      
      <section className="flex items-center h-screen mx-16">
        <div className="relative w-[45vw] h-[70vh] flex justify-center">
          <Image src="/twice-group-1.png" alt="Twice Group Photo From 'I Got You' Set" fill={true}
            className="object-contain"
          />
        </div>
        <div className="w-[50vw] pl-8">
          <div className="mb-4">
            <h1 className={`text-4xl text-primary-orange absolute ml-1 -mt-1 ${bungee.className}`}>
              ABOUT TWICE
            </h1>
            <h1 className={`text-4xl text-alternate-black ${bungee.className}`}>
              ABOUT TWICE
            </h1>
          </div>
          <p className="mt-4 mb-4">
            TWICE is a K-Pop girl group produced by JYP Entertainment through the reality program [SIXTEEN]. 
            The group is composed of 9 members: NAYEON, JEONGYEON, MOMO, SANA, JIHYO, MINA, DAHYUN, CHAEYOUNG, and TZUYU. 
            Debuted on October 20th, 2015 with the 1st EP [THE STORY BEGINS] that featured the title track “Like OOH-AHH”.
          </p>
          <Link 
            href="/"
            className="absolute z-10 no-underline
              before:bg-primary-orange before:content-[''] before:w-full before:absolute before:bottom-[3px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
          >
            Read TWICE History
          </Link>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center min-h-screen mt-32">
        <div className="flex w-full justify-center items-center">
          <Image src="/title-bg.svg" alt="Background for Title Text" width={0} height={0}
            className="absolute w-[280px] md:w-[360px]"
          />
          <h1 className={`absolute text-2xl md:text-4xl text-alternate-black text-center ${bungee.className}`}>
            THE MEMBERS
          </h1>
          <h1 className={`absolute text-2xl md:text-4xl text-cream -mr-3 -mt-1 text-center ${bungee.className}`}>
            THE MEMBERS
          </h1>
        </div> 
        <Image src="/members-polaroid.svg" alt="Twice Members" width={1240} height={0}
          className="mt-32"
        />
      </section>

      <section className="w-full flex flex-col justify-center items-center mt-32">
        <div className="flex justify-center mb-4">
          <h1 className={`text-4xl text-primary-orange absolute -mr-3 -mt-1 text-center ${bungee.className}`}>
            DISCOGRAPHY
          </h1>
          <h1 className={`text-4xl text-alternate-black text-center ${bungee.className}`}>
            DISCOGRAPHY
          </h1>
        </div>
        <div className="w-[80%] grid grid-cols-3 justify-items-center gap-0">
          {albums.map((album) => (
            <Album key={album.id} name={album.name} img={album.img} />
          ))}
        </div>
        <Link 
          href="/"
          className="relative z-0 text-center mt-8 font-semibold no-underline
            before:bg-primary-orange before:z-5 before:content-[''] before:w-full before:absolute before:bottom-[4px]
            before:h-[4px] before:left-0 before:block before:transition-all before:-z-1 hover:before:h-[80%]"
        >
          See All TWICE Discography
        </Link>
      </section>
    </main>
  )
}
