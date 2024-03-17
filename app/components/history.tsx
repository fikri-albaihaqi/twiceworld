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
      <div className="flex items-center h-[1080px]">
      <div className="w-1/2 ml-16 pr-16">
        <h1 className={`text-4xl font-bold ${poppins.className}`}>{title}</h1>
        <h2 className={`font-bold ${poppins.className}`}>{date}</h2>
        <p className="mt-6">
          {description}
        </p>  
      </div>

      <div className={`w-[60%] h-[1080px] relative right-0 bg-cover`} style={{backgroundImage: `url(${img})`}}></div>
    </div>
    ) : (
      <div className="flex items-center h-[1080px]">
        <div className={`w-[60%] h-[1080px] relative right-0 bg-cover`} style={{backgroundImage: `url(${img})`}}></div>

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