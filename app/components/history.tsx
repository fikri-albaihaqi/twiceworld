import Image from 'next/image'
import { poppins } from '../assets/fonts'
import { HistoryType } from '../lib/types/firebase'

export default function History({
  history,
  order,
}: {
  history: HistoryType
  order: number
}) {
  return order % 2 !== 0 ? (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center my-16">
      <div className="w-[90%] lg:w-1/2">
        <h1
          className={`text-4xl font-bold text-primary-pink ${poppins.className}`}
        >
          {history.title}
        </h1>
        <h2 className={`font-bold ${poppins.className}`}>
          {history.date?.slice(0, 4)}
        </h2>
        <p className="mt-6">{history.description}</p>
      </div>

      <Image
        src={history.image}
        alt={history.description}
        width={600}
        height={0}
        className="right-0 md:ml-4 w-[90%] md:max-w-[50%] lg:w-auto"
      />
    </div>
  ) : (
    <div className="flex flex-col md:flex-row justify-evenly items-center my-16">
      <Image
        src={history.image}
        alt={history.description}
        width={600}
        height={0}
        className="left-0 md:mr-4 w-[90%] md:max-w-[50%] lg:w-auto"
      />

      <div className="w-[90%] lg:w-1/2">
        <h1
          className={`text-4xl font-bold text-primary-pink ${poppins.className}`}
        >
          {history.title}
        </h1>
        <h2 className={`font-bold ${poppins.className}`}>
          {history.date?.slice(0, 4)}
        </h2>
        <p className="mt-6">{history.description}</p>
      </div>
    </div>
  )
}
