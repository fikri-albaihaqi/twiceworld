import Image from "next/image";
import { poppins } from "../assets/fonts"

export default function History({
  id,
  title,
  date,
  img,
  description,
} : {
  id: number;
  title: string;
  date: string;
  img: string;
  description: string;
}) {


  return(
    id % 2 !== 0 ? (
      <div className="flex justify-between items-center my-16">
        <div className="w-1/2">
          <h1 className={`text-4xl font-bold ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{date}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      
        <Image src={img} alt={description} width={500} height={0} className="right-0" />
      </div>
    ) : (
      <div className="flex justify-between items-center my-16">
        <Image src={img} alt={description} width={500} height={0} className="right-0" />

        <div className="w-1/2 mr-16 pl-16">
          <h1 className={`text-4xl font-bold ${poppins.className}`}>{title}</h1>
          <h2 className={`font-bold ${poppins.className}`}>{date}</h2>
          <p className="mt-6">
            {description}
          </p>  
        </div>
      </div>
    )
  )
}