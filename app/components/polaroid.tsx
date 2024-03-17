import { gloriaHallelujah } from "@/app/assets/fonts"

export default function Polaroid({
  img,
  name,
}: {
  img: string;
  name: string;
}) {
  return (
    <div className="bg-white w-[320px] h-[512px] my-16 p-6 rounded-md">
      <div 
        className={`h-[85%] bg-[url('/nayeon.jpg')] bg-cover`} 
        style={{
          backgroundImage: `url('${img}')`
        }}>
      </div>

      <div 
        className="h-[88px] flex flex-col justify-center items-center font-shadow font-bold text-center text-4xl 
          text-primary-black"
      >
        <h1 className={gloriaHallelujah.className}>
          {name}
        </h1>
      </div>
    </div>
  )
}