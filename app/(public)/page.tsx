import { bungee } from "@/app/assets/fonts"
import Link from "next/link"
import Image from "next/image"
import Discography from "../components/discography"

export default function Page() {
  const members = [
    {
      id: 1,
      name: "Nayeon",
      img: "/nayeon.png",
      link: "/members/nayeon"
    },
    {
      id: 2,
      name: "Jeongyeon",
      img: "/jeongyeon.png",
      link: "/members/jeongyeon"
    },
    {
      id: 3,
      name: "Momo",
      img: "/momo.png",
      link: "/members/momo"
    },
    {
      id: 4,
      name: "Sana",
      img: "/sana.png",
      link: "/members/sana"
    },
    {
      id: 5,
      name: "Jihyo",
      img: "/jihyo.png",
      link: "/members/jihyo"
    },
    {
      id: 6,
      name: "Mina",
      img: "/mina.png",
      link: "/members/mina"
    },
    {
      id: 7,
      name: "Dahyun",
      img: "/dahyun.png",
      link: "/members/dahyun"
    },
    {
      id: 8,
      name: "Chaeyoung",
      img: "/chaeyoung.png",
      link: "/members/chaeyoung"
    },
    {
      id: 9,
      name: "Tzuyu",
      img: "/tzuyu.png",
      link: "/members/tzuyu"
    }
  ]

  const albums = [
    {
      id: 1,
      name: "Zone",
      altTitle: "Jihyo's 1st Mini Album",
      image: "/alb-zone.jpg",
      releaseDate: "2023-08-18",
      numOfTrack: 7
    },
    {
      id: 2,
      name: "Ready To Be",
      altTitle: "12th Mini Album",
      image: "/alb-rtb.jpg",
      releaseDate: "2023-03-10",
      numOfTrack: 7
    },
    {
      id: 3,
      name: "Between 1&2",
      altTitle: "11th Mini Album",
      image: "/alb-between.jpg",
      releaseDate: "2022-08-26",
      numOfTrack: 7
    },
    {
      id: 4,
      name: "Im Nayeon",
      altTitle: "Nayeon's 1st Mini Album",
      image: "/alb-nayeon.jpg",
      releaseDate: "2022-06-24",
      numOfTrack: 7
    },
    {
      id: 5,
      name: "Formula of Love: O+T=<3",
      altTitle: "3rd Full Album",
      image: "/alb-fol.jpg",
      releaseDate: "2021-11-12",
      numOfTrack: 16
    },
    {
      id: 6,
      name: "Taste of Love",
      altTitle: "10th Mini Album",
      image: "/alb-tol.jpg",
      releaseDate: "2021-06-09",
      numOfTrack: 6
    },
    {
      id: 7,
      name: "Eyes Wide Open",
      altTitle: "2nd Full Album",
      image: "/alb-tol.jpg",
      releaseDate: "2020-10-26",
      numOfTrack: 13
    },
    {
      id: 8,
      name: "More & More",
      altTitle: "9th Mini Album",
      image: "/alb-tol.jpg",
      releaseDate: "2020-06-01",
      numOfTrack: 7
    },
    {
      id: 9,
      name: "Feel Special",
      altTitle: "8th Mini Album",
      image: "/alb-tol.jpg",
      releaseDate: "2019-09-23",
      numOfTrack: 7
    },
    {
      id: 10,
      name: "Fancy You",
      altTitle: "7th Mini Album",
      image: "/alb-tol.jpg",
      releaseDate: "2019-04-22",
      numOfTrack: 6
    },
    {
      id: 11,
      name: `The Year of "YES"`,
      altTitle: "3rd Special Album",
      image: "/alb-tol.jpg",
      releaseDate: "2018-12-12",
      numOfTrack: 9
    },
    {
      id: 12,
      name: "YES or YES",
      altTitle: "6th Mini Album",
      image: "/alb-tol.jpg",
      releaseDate: "2018-11-05",
      numOfTrack: 7
    },
    {
      id: 13,
      name: "Summer Nights",
      altTitle: "2nd Special Album",
      image: "/alb-tol.jpg",
      releaseDate: "2018-07-09",
      numOfTrack: 9
    }
  ]

  return (
    <main className="">
      <header className="relative -z-10 h-[560px] md:h-[440px] lg:h-[640px] xl:h-[900px]">
        <Image src="/header.png" alt="Header Image with twice members in it" fill={true}
          className="hidden md:block -z-10 object-contain object-top"
        />
        <Image src="/header-mobile.png" alt="Header Image with twice members in it" fill={true}
          className="absolute md:hidden -z-10 object-contain object-top"
        />
      </header>

      <section className="flex flex-col md:flex-row items-center xl:h-screen mx-16">
        <div className="relative w-[100vw] h-[300px] md:w-[45vw] md:h-[40vh] lg:h-[50vh] xl:h-[70vh] flex justify-center">
          <Image src="/twice-group-1.png" alt="Twice Group Photo From 'I Got You' Set" fill={true}
            className="object-contain"
          />
        </div>
        <div className="w-[90vw] md:w-[50vw] pl-8">
          <div className="mt-8 md:mt-0 mb-4">
            <h1 className={`text-4xl text-cream absolute ml-1 -mt-1 ${bungee.className}`}>
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
            href="/history"
            className="absolute no-underline font-semibold
              before:bg-primary-pink before:content-[''] before:w-full before:absolute before:bottom-[3px]
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
        <Image src="/red-string.svg" alt="The red string of fate connecting all twice member" width={800} height={0}
          className="hidden lg:block absolute -z-10"
        />
        <Image src="/red-string-md.svg" alt="The red string of fate connecting all twice member" width={600} height={0}
          className="hidden md:block lg:hidden absolute -z-10"
        />
        <Image src="/red-string-mobile.svg" alt="The red string of fate connecting all twice member" width={250} height={0}
          className="md:hidden absolute -z-10"
        />
        <div className="w-full grid grid-cols-2 justify-items-center mt-32">
          {members?.map((member) => member.id % 2 !== 0 ? (
            <Link key={member.id} href={member.link}>
              <Image src={member.img} alt={member.name} width={500} height={0} />
            </Link>
          )
            : (
              <Link key={member.id} href={member.link}>
                <Image src={member.img} alt={member.name} width={500} height={0} className="mt-24 md:mt-48" />
              </Link>
            )
          )}
        </div>
      </section>

      <section className="relative w-full flex flex-col justify-between items-center pt-32 pb-16 mb-32">
        <div className="flex justify-center mb-4">
          <h1 className={`text-4xl text-cream absolute ml-2 -mt-1 ${bungee.className}`}>
            DISCOGRAPHY
          </h1>
          <h1 className={`text-4xl text-alternate-black ${bungee.className}`}>
            DISCOGRAPHY
          </h1>
        </div>
        <div className="w-[80%] grid grid-cols-2 md:grid-cols-3 justify-items-center">
          {albums.slice(0, 6).map((album) => (
            <Discography album={album} admin={false} key={album.id} />
          ))}
        </div>
        <Link
          href="/discography"
          className="absolute no-underline bottom-0 mt-16 font-semibold
              before:bg-primary-pink before:content-[''] before:w-full before:absolute before:bottom-[3px]
              before:h-[4px] before:left-0 before:block before:transition-all before:-z-10 hover:before:h-[80%]"
        >
          See All TWICE Discography
        </Link>
      </section>
    </main>
  )
}
