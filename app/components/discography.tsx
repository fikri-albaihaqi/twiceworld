import Image from "next/image";
import Link from "next/link";

const Discography = ({ album, admin }: { album: any; admin: boolean }) => {
  return (
    <Link
      href={
        admin
          ? `/admin/discography/detail/${album.id}`
          : `/discography/${album.id}`
      }
      className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] 2xl:w-[460px] 2xl:h-[460px] my-4 mx-2 group"
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
        <div className="absolute z-10 text-center">
          <h1
            className="text-center text-2xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 
                  ease-in-out"
          >
            {album.name}
          </h1>
          <p
            className="text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 
                  ease-in-out"
          >
            {album.releaseDate}
          </p>
        </div>
        <div
          className="absolute z-10 bg-white w-full h-full group-hover:blur-sm transition-all duration-250 ease-in-out
                  opacity-0 group-hover:opacity-20"
        ></div>
      </div>
      <Image
        src={album.image}
        alt={album.name}
        fill={true}
        className="group-hover:blur-sm transition-all duration-250 ease-in-out"
      />
    </Link>
  );
};

export default Discography;
