import { bungee } from "../assets/fonts"
import History from "../components/history"
import Image from "next/image"

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

  return(
    <main className="flex flex-col">
      <header className="relative -z-10 h-[560px] md:h-[440px] lg:h-[640px] xl:h-[900px]">
        <Image src="/history-header.png" alt="Twice Ready To Be Concert in Las Vegas" fill={true} />
      </header>

      <section className="mx-16">
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
    </main>
  )
}