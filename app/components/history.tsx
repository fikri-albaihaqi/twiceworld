import Image from "next/image";
import { poppins } from "../assets/fonts"

export default function History({
  order,
  title,
  date,
  img,
  description,
} : {
  order: number;
  title: string;
  date: string;
  img: string;
  description: string;
}) {


  return(
    order % 2 !== 0 ? (
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center my-16">
        <div className="w-[90%] lg:w-1/2">
          <h1 className={`text-4xl font-bold text-primary-pink ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{date?.slice(0, 4)}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      
        <Image src={img} alt={description} width={600} height={0} className="right-0 md:ml-4 w-[90%] md:max-w-[50%] lg:w-auto" />
      </div>
    ) : (
      <div className="flex flex-col md:flex-row justify-evenly items-center my-16">
        <Image src={img} alt={description} width={600} height={0} className="left-0 md:mr-4 w-[90%] md:max-w-[50%] lg:w-auto" />

        <div className="w-[90%] lg:w-1/2">
          <h1 className={`text-4xl font-bold text-primary-pink ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{date?.slice(0, 4)}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      </div>
    )
  )
}