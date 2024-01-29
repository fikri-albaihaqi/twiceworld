import { bungee } from "@/app/assets/fonts"
import Link from "next/link"
import Image from "next/image"
import Polaroid from "./components/polaroid"
import Album from "./components/album"
import Footer from "./components/footer"

export default function Home() {
  const members = [
    {
      id: 1,
      name: "Nayeon",
      img: "/nayeon.jpg"
    },
    {
      id: 2,
      name: "Jeongyeon",
      img: "/jeongyeon.jpg"
    },
    {
      id: 3,
      name: "Momo",
      img: "/momo.jpg"
    },
    {
      id: 4,
      name: "Sana",
      img: "/sana.jpg"
    },
    {
      id: 5,
      name: "Jihyo",
      img: "/jihyo.jpg"
    },
    {
      id: 6,
      name: "Mina",
      img: "/mina.jpg"
    },
    {
      id: 7,
      name: "Dahyun",
      img: "/dahyun.jpg"
    },
    {
      id: 8,
      name: "Chaeyoung",
      img: "/chaeyoung.jpg"
    },
    {
      id: 9,
      name: "Tzuyu",
      img: "/tzuyu.jpg"
    }
  ]

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
    <main className="mx-16">
      <header className="flex min-h-screen flex-col items-center justify-center">
        <h1 className={`text-5xl text-primary-orange absolute -mr-3 -mt-3 text-center ${bungee.className}`}>
          ONCE THROUGH THE EARS <br />
          AND ONCE THROUGH THE EYES
        </h1>
        <h1 className={`text-5xl text-alternate-black text-center ${bungee.className}`}>
          ONCE THROUGH THE EARS <br />
          AND ONCE THROUGH THE EYES
        </h1>
      </header>
      
      <section className="flex justify-between items-center h-screen">
        <div className="w-[45vw] h-[70vh] flex justify-center items-center bg-white -rotate-3 rounded-md">
          <div className="w-[95%] h-[95%] bg-[url('/scientist.jpg')] bg-cover"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-[50vw] pl-8">
          <div className="flex justify-center mb-4">
            <h1 className={`text-4xl text-primary-orange absolute -mr-3 -mt-1 text-center ${bungee.className}`}>
              ABOUT TWICE
            </h1>
            <h1 className={`text-4xl text-alternate-black text-center ${bungee.className}`}>
              ABOUT TWICE
            </h1>
          </div>
          <p>
            TWICE is a K-Pop girl group produced by JYP Entertainment through the reality program [SIXTEEN]. 
            The group is composed of 9 members: NAYEON, JEONGYEON, MOMO, SANA, JIHYO, MINA, DAHYUN, CHAEYOUNG, and TZUYU. 
            Debuted on October 20th, 2015 with the 1st EP [THE STORY BEGINS] that featured the title track “Like OOH-AHH”.
          </p>
          <Link 
            href="/"
            className="relative z-0 text-center mt-8 font-semibold no-underline
              before:bg-primary-orange before:z-5 before:content-[''] before:w-full before:absolute before:bottom-[4px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-1 hover:before:h-[80%]"
          >
            Read TWICE History
          </Link>
        </div>
      </section>

      <section className="relative flex flex-col justify-center min-h-screen mt-32">
        <div className="flex w-full justify-center items-center">
          <Image src="/title-bg.svg" alt="Background for Title Text" width={360} height={360}
            className="absolute"
          />
          <h1 className={`absolute text-4xl text-alternate-black text-center ${bungee.className}`}>
            THE MEMBERS
          </h1>
          <h1 className={`absolute text-4xl text-cream -mr-3 -mt-1 text-center ${bungee.className}`}>
            THE MEMBERS
          </h1>
        </div> 
        <div className="w-full grid grid-cols-3 justify-items-center mt-32">
          {members?.map((member) => (
            <Polaroid key={member.id} img={member.img} name={member.name} />  
          ))}
        </div>       
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
