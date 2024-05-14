import { cutiveMono, gloriaHallelujah, poppins } from "@/app/assets/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-[1000px] md:min-h-screen lg:h-[900px] flex justify-center overflow-hidden">
      <Image src="/tzuyu-bg.png" alt="Tzuyu background image" fill={true} 
        className="object-cover -z-10"
      />
      <div className="flex flex-col items-center mt-32 md:mt-72 lg:mt-56">
        <Image src="/tzuyu-ransome-note.svg" alt="Tzuyu" width={400} height={0} className="w-[300px] md:w-[400px]" />
        <div className="flex justify-center">
          <Image src="/paper-bg.png" alt="Paper background" width={580} height={0} className="absolute -z-10" />
          <div className={`relative w-[280px] md:w-[420px] mt-9 md:mt-12 text-xs md:text-base ${gloriaHallelujah.className}`}>
            <div className="flex justify-between">
              <p>Chou Tzuyu</p>
              <p>June 14, 1999</p>
            </div>
            <div className="max-[413px]:mt-4 mt-5 md:mt-8 max-[413px]:leading-normal leading-5 md:leading-7">
              <p>POSITION: Lead Dancer, Sub Vocalist, Visual, Maknae</p>
              <p>ZODIAC SIGN: Gemini</p>
              <p>HEIGHT: 170 cm</p>
              <p>MBTI: ISFP</p>
              <p>NATIONALITY: Taiwanese</p>
              <p>INSTAGRAM: @thinkaboutzu</p>
            </div>
            <Image src="/tzuyu-sign.png" alt="Tzuyu signature" width={120} height={0} 
              className="absolute right-0 w-[80px] md:w-[120px]"
            />
            <Image src="/tzuyu-kid.png" alt="A childhood photo of Tzuyu" width={240} height={0} 
              className="absolute lg:top-0 -left-28 lg:-left-64"
            />
            <div className="absolute top-56 lg:top-16 -right-16 lg:-right-72 -rotate-6 uppercase">
              <Image src="/receipt-bg.png" alt="Twice member song credits" width={240} height={0} />
              <div className={`absolute w-[240px] flex flex-col items-center top-8 text-xs ${cutiveMono.className}`}>
                <h1 className={`text-3xl font-medium ${poppins.className}`}>TWICE</h1>
                <h2>SONG CREDITS</h2>
                <br />
                <div className="self-start ml-3">
                  <p>#0006 CHOU TZUYU</p>
                  <p>JUNE 14, 1999</p>
                </div>
                <table className="w-[216px] table-auto">
                  <thead className="border-y border-alternate-black border-dashed">
                    <tr>
                      <th className="text-start font-normal">QTY</th>
                      <th className="text-start font-normal">ITEM</th>
                      <th className="text-end font-normal">LENGTH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>21:29</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>CELEBRATE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-y border-alternate-black border-dashed">
                    <tr>
                      <td colSpan={2}>Total Songs:</td>
                      <td className="text-end">02</td>
                    </tr>
                  </tfoot>
                </table>
                <br />
                <p>One in a million!</p>
                <Image src="/barcode.png" alt="Twice Barcode" width={150} height={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}