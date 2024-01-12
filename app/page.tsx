import { bungee } from "@/app/assets/fonts"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className={`text-5xl text-primary-orange absolute -mr-3 -mt-3 text-center ${bungee.className}`}>
        ONCE THROUGH THE EARS <br />
        AND ONCE THROUGH THE EYES
      </h1>
      <h1 className={`text-5xl text-alternate-black text-center ${bungee.className}`}>
        ONCE THROUGH THE EARS <br />
        AND ONCE THROUGH THE EYES
      </h1>
    </main>
  )
}
