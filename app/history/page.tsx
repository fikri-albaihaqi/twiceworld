import { bungee, dmSerif } from "../assets/fonts"
import Image from "next/image"

export default function History() {
  return(
    <main className="flex flex-col">
      <section className="w-full flex flex-col justify-center items-center my-32">
        <div className="flex justify-center mb-4">
          <h1 className={`text-4xl text-primary-orange absolute -mr-3 -mt-1 text-center ${bungee.className}`}>
            HISTORY
          </h1>
          <h1 className={`text-4xl text-alternate-black text-center ${bungee.className}`}>
            HISTORY
          </h1>
        </div>
      </section>

      <section className="">
        <div className="flex items-center h-screen">
          <div className="w-1/2 ml-16 pr-16">
            <h1 className={`text-4xl font-bold ${dmSerif.className}`}>PRE-DEBUT</h1>
            <h2 className={`font-bold ${dmSerif.className}`}>2015</h2>
            <p className="mt-6">
              JYP's Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'TWICE will present vibrant energy with title track 'Like OOH-AHH'Average age is 18, They will take up with assertive attractiveness.

              - JYP Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'
              - Present the brand new genre "Color Pop" which is unique color of TWICE
              - Once with superb music, Twice with best performance,Have great willingness to present the highest touching to the fans  
            </p>  
          </div>

          <div className="w-1/2 h-screen relative right-0 bg-[url('/sixteen.png')] bg-cover"></div>
        </div>

        <div className="flex items-center h-screen">
          <div className="w-1/2 h-screen relative right-0 bg-[url('/ooh-ahh.png')] bg-cover"></div>

          <div className="w-1/2 mr-16 pl-16">
            <h1 className={`text-4xl font-bold ${dmSerif.className}`}>THE DEBUT</h1>
            <h2 className={`font-bold ${dmSerif.className}`}>2015</h2>
            <p className="mt-6">
              JYP's Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'TWICE will present vibrant energy with title track 'Like OOH-AHH'Average age is 18, They will take up with assertive attractiveness.

              - JYP Brand new girl group 'TWICE' release debut album 'THE STORY BEGINS'
              - Present the brand new genre "Color Pop" which is unique color of TWICE
              - Once with superb music, Twice with best performance,Have great willingness to present the highest touching to the fans  
            </p>  
          </div>
        </div>
      </section>
    </main>
  )
}