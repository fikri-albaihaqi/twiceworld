import Image from "next/image"
import Link from "next/link"

const Discography = ({
  album,
  admin,
}:{
  album: any,
  admin: boolean,
}) => {
  return (
    <Link href={admin ? `/admin/discography/detail/${album.id}` : `/discography/${album.id}`} 
      className="relative w-[360px] h-[360px] my-4 mx-2 group"
    >
      <div className="w-full h-full z-10 flex flex-col justify-center items-center bg-transparent">
        <h1 className="z-30 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 
                  ease-in-out"
        >
          {album.name}
        </h1>
        <p className="z-30 text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 
                  ease-in-out">
          {album.releaseDate}
        </p>
        <div className="absolute z-20 bg-white w-full h-full group-hover:blur-sm transition-all duration-250 ease-in-out
                  opacity-0 group-hover:opacity-20"
        ></div>
      </div>
      <Image src={album.image} alt={album.name} fill={true}
        className="group-hover:blur-sm transition-all duration-250 ease-in-out"
      />
    </Link>
  )
}

export default Discography