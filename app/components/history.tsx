import Image from "next/image";
import { poppins } from "../assets/fonts"

export default function History({
  order,
  title,
  year,
  img,
  description,
} : {
  order: number;
  title: string;
  year: string;
  img: string;
  description: string;
}) {


  return(
    order % 2 !== 0 ? (
      <div className="flex flex-col-reverse md:flex-row justify-between items-center my-16">
        <div className="w-2/3 lg:w-1/2">
          <h1 className={`text-4xl font-bold text-primary-pink ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{year}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      
        <Image src={img} alt={description} width={500} height={0} className="right-0 ml-4" />
      </div>
    ) : (
      <div className="flex flex-col md:flex-row justify-between items-center my-16">
        <Image src={img} alt={description} width={500} height={0} className="left-0 mr-4" />

        <div className="w-2/3 lg:w-1/2">
          <h1 className={`text-4xl font-bold text-primary-pink ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{year}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      </div>
    )
  )
}