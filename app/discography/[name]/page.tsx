import Image from "next/image";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <main>
      <div className="w-full flex">
        <div className="w-1/2 h-screen">
          <Image src="/alb-fol.jpg" alt="Album" width={1000} height={0} className="w-[50vw]" />
        </div>
        <div className="w-1/2 px-16 flex flex-col justify-center mt-32">
          <div>
            <h1 className="text-6xl uppercase font-bold text-primary-pink">Formula of Love O+T=&lt;3</h1>
            <h2 className="font-bold text-2xl mt-4">2021</h2>

            <p className="mt-8">
              TWICE, “a representative K-pop girl group”, will release its third full-length album,
              “Formula of Love: O+T=&lt;3”, with the title song, “SCIENTIST”, on November 12 in all countries
              worldwide.
              <br />
              <br />
              TWICE achieved #6 on the Billboard 200 Chart, the US Billboard’s main chart, by its “Taste of Love”, the
              10th mini album, released last June. It is the best achievement for a mini-album released by a K-pop
              girl group. In October, TWICE released “The Feels”, the first English single since its debut, for fans around
              the world who have sent unchanging support to TWICE. This album recorded its own best achievement
              such as #83 on the Billboard Hot 100 Chart, #80 on the UK Official Chart, and #83 on the Apple Music
              Top 100 Global Chart. TWICE has gained even hotter popularity over the world. Driven by the
              momentum, TWICE releases “Formula of Love: O+T=&lt;3”, the third full-length album, which was
              completed by the devotion and love for the fans of the nine members. The true value of TWICE shines
              even brighter.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl text-primary-pink font-bold">TRACK LIST</h2>
            <ol className="list-decimal ml-4">
              <li>SCIENTIST</li>
              <li>MOONLIGHT</li>
              <li>ICON</li>
              <li>CRUEL</li>
              <li>REAL YOU</li>
              <li>F.I.L.A</li>
              <li>LAST WALTZ</li>
              <li>ESPRESSO</li>
              <li>REWIND</li>
              <li>CACTUS</li>
              <li>PUSH & PULL (JIHYO, SANA, DAHYUN)</li>
              <li>HELLO (NAYEON, MOMO, CHAEYOUNG)</li>
              <li>1, 3, 2 (JEONGYEON, MINA, TZUYU)</li>
              <li>CANDY</li>
              <li>The Feels (Korean Ver.)</li>
              <li>The Feels</li>
              <li>SCIENTIST (R3HAB Remix)</li>
            </ol>
          </div>
        </div>
      </div>
      <iframe src="https://www.youtube.com/embed/vPwaXytZcgI"
        title="TWICE “SCIENTIST” M/V"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-[90%] h-screen m-auto mt-16 mb-16 rounded-3xl"
      >
      </iframe>
    </main>
  )
}