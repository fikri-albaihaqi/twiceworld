"use client"

import { useEffect, useState } from "react"
import { bungee } from "../../assets/fonts"
import History from "../../components/history"
import Image from "next/image"
import { DocumentData, QuerySnapshot, collection, getDocs, onSnapshot } from "@firebase/firestore"
import db from "../../utils/firestore"

export default function Page() {
  const histories = [
    {
      id: 1,
      title: "PRE-DEBUT",
      date: "2015",
      img: "/sixteen-1.png",
      description: "JYP's Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'TWICE will present vibrant energy with title track 'Like OOH-AHH'Average age is 18, They will take up with assertive attractiveness. - JYP Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS' - Present the brand new genre \"\Color Pop\"\ which is unique color of TWICE - Once with superb music, Twice with best performance,Have great willingness to present the highest touching to the fans",
    },
    {
      id: 2,
      title: "THE DEBUT",
      date: "2015",
      img: "/the-story-begins-1.png",
      description: "JYP's Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'TWICE will present vibrant energy with title track 'Like OOH-AHH'Average age is 18, They will take up with assertive attractiveness. - JYP Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS' - Present the brand new genre \"\Color Pop\"\ which is unique color of TWICE - Once with superb music, Twice with best performance,Have great willingness to present the highest touching to the fans",
    },
    {
      id: 3,
      title: "THE FIRST COMEBACK",
      date: "2016",
      img: "/sixteen-1.png",
      description: "JYP's Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'TWICE will present vibrant energy with title track 'Like OOH-AHH'Average age is 18, They will take up with assertive attractiveness. - JYP Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS' - Present the brand new genre \"\Color Pop\"\ which is unique color of TWICE - Once with superb music, Twice with best performance,Have great willingness to present the highest touching to the fans",
    }
  ]

  return (
    <main className="flex flex-col overflow-hidden">
      <header className="relative -z-10 h-[560px] md:h-[440px] lg:h-[640px] xl:h-[900px]">
        <Image src="/history-header.png" alt="Twice Ready To Be Concert in Las Vegas" fill={true}
          className="hidden md:block object-contain object-top"
        />
        <Image src="/history-header-mobile.png" alt="Twice Ready To Be Concert in Las Vegas" fill={true}
          className="md:hidden object-contain object-top"
        />
      </header>

      <section className="mx-4 md:mx-16">
        {histories?.map((history) => (
          <History
            key={history.id}
            id={history.id}
            title={history.title}
            date={history.date}
            img={history.img}
            description={history.description}
          />
        ))}
      </section>

      <section className="mx-16 mb-32">
        <div className="flex mb-4">
          <h1 className={`text-3xl md:text-4xl text-cream absolute ml-1 text-center ${bungee.className}`}>
            AWARDS
          </h1>
          <h1 className={`text-3xl md:text-4xl text-alternate-black text-center mt-1 ${bungee.className}`}>
            AWARDS
          </h1>
        </div>
        <div className="flex">
          <div className="shrink-0 w-[320px] h-[420px] flex flex-col justify-between bg-white mx-px">
            <Image src="/cup-trophy.svg" alt="Music Shows Trophy" width={48} height={84} className="relative left-8 top-8" />

            <div className="relative left-8 bottom-8">
              <h1 className="text-6xl font-bold">121</h1>
              <h6 className="text-lg">Music Shows</h6>
            </div>
          </div>
          <div className="shrink-0 w-[320px] h-[420px] flex flex-col justify-between bg-white mx-px">
            <Image src="/mama-trophy.svg" alt="MAMA Awards Trophy" width={32} height={84} className="relative left-8 top-8" />

            <div className="relative left-8 bottom-8">
              <h1 className="text-6xl font-bold">19</h1>
              <h6 className="text-lg">MAMA Awards</h6>
            </div>
          </div>
          <div className="shrink-0 w-[320px] h-[420px] flex flex-col justify-between bg-white mx-px">
            <Image src="/gda-trophy.svg" alt="Golden Disc Awards Trophy" width={41} height={84} className="relative left-8 top-8" />

            <div className="relative left-8 bottom-8">
              <h1 className="text-6xl font-bold">12</h1>
              <h6 className="text-lg">Golden Disc Awards</h6>
            </div>
          </div>
          <div className="shrink-0 w-[320px] h-[420px] flex flex-col justify-between bg-white mx-px">
            <Image src="/sma-trophy.svg" alt="Seoul Music Awards Trophy" width={25} height={84} className="relative left-8 top-8" />

            <div className="relative left-8 bottom-8">
              <h1 className="text-6xl font-bold">7</h1>
              <h6 className="text-lg">Seoul Music Awards</h6>
            </div>
          </div>
          <div className="shrink-0 w-[320px] h-[420px] flex flex-col justify-between bg-white mx-px">
            <Image src="/mma-trophy.svg" alt="Melon Music Awards Trophy" width={64} height={24} className="relative left-8 top-8" />

            <div className="relative left-8 bottom-8">
              <h1 className="text-6xl font-bold">5</h1>
              <h6 className="text-lg">Melon Music Awards</h6>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}