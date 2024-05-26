import Image from "next/image";
import Link from "next/link";
import styles from "@/app/discography/styles.module.css"

export default function Page() {
  const discographies = [
    {
      id: 1,
      name: "Zone",
      altTitle: "Jihyo's 1st Mini Album",
      img: "/alb-zone.jpg",
      releaseDate: "2023-08-18",
      numOfTrack: 7
    },
    {
      id: 2,
      name: "Ready To Be",
      altTitle: "12th Mini Album",
      img: "/alb-rtb.jpg",
      releaseDate: "2023-03-10",
      numOfTrack: 7
    },
    {
      id: 3,
      name: "Between 1&2",
      altTitle: "11th Mini Album",
      img: "/alb-between.jpg",
      releaseDate: "2022-08-26",
      numOfTrack: 7
    },
    {
      id: 4,
      name: "Im Nayeon",
      altTitle: "Nayeon's 1st Mini Album",
      img: "/alb-nayeon.jpg",
      releaseDate: "2022-06-24",
      numOfTrack: 7
    },
    {
      id: 5,
      name: "Formula of Love: O+T=<3",
      altTitle: "3rd Full Album",
      img: "/alb-fol.jpg",
      releaseDate: "2021-11-12",
      numOfTrack: 16
    },
    {
      id: 6,
      name: "Taste of Love",
      altTitle: "10th Mini Album",
      img: "/alb-tol.jpg",
      releaseDate: "2021-06-09",
      numOfTrack: 6
    },
    {
      id: 7,
      name: "Eyes Wide Open",
      altTitle: "2nd Full Album",
      img: "/alb-tol.jpg",
      releaseDate: "2020-10-26",
      numOfTrack: 13
    },
    {
      id: 8,
      name: "More & More",
      altTitle: "9th Mini Album",
      img: "/alb-tol.jpg",
      releaseDate: "2020-06-01",
      numOfTrack: 7
    },
    {
      id: 9,
      name: "Feel Special",
      altTitle: "8th Mini Album",
      img: "/alb-tol.jpg",
      releaseDate: "2019-09-23",
      numOfTrack: 7
    },
    {
      id: 10,
      name: "Fancy You",
      altTitle: "7th Mini Album",
      img: "/alb-tol.jpg",
      releaseDate: "2019-04-22",
      numOfTrack: 6
    },
    {
      id: 11,
      name: `The Year of "YES"`,
      altTitle: "3rd Special Album",
      img: "/alb-tol.jpg",
      releaseDate: "2018-12-12",
      numOfTrack: 9
    },
    {
      id: 12,
      name: "YES or YES",
      altTitle: "6th Mini Album",
      img: "/alb-tol.jpg",
      releaseDate: "2018-11-05",
      numOfTrack: 7
    },
    {
      id: 13,
      name: "Summer Nights",
      altTitle: "2nd Special Album",
      img: "/alb-tol.jpg",
      releaseDate: "2018-07-09",
      numOfTrack: 9
    }
  ]

  return (
    <main className="w-full flex">
      <div className="w-1/2 h-screen">
        <Image src="/alb-between.jpg" alt="Album" width={1000} height={0} className="fixed w-[50vw]" />
      </div>
      <div className="w-1/2 flex flex-col ml-8">
        {discographies.map((discography) => (
          <Link
            href={`/discography/${discography.name}`}
            key={discography.id}
            className={`${styles.discography} py-8 pl-12 flex flex-col text-3xl uppercase 
              shadow-[24px_-6px_16px_rgba(120,120,120,0.4)] first:shadow-none hover:text-primary-pink`}
          >
            {discography.name} • {discography.releaseDate.slice(0, 4)}
            <span
              className={`${styles.detail} text-base text-alternate-black mt-6`}
            >
              {discography.altTitle} • {discography.numOfTrack} Tracks
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}