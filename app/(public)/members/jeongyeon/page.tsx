import { cutiveMono, gloriaHallelujah, poppins } from "@/app/assets/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-[1000px] md:min-h-screen lg:h-[900px] flex justify-center overflow-hidden">
      <Image src="/jeongyeon-bg.png" alt="Jeongyeon background image" fill={true} 
        className="object-cover -z-10"
      />
      <div className="flex flex-col items-center mt-32 md:mt-72 lg:mt-56">
        <Image src="/jeongyeon-ransome-note.svg" alt="Jeongyeon" width={400} height={0} className="w-[300px] md:w-[600px]" />
        <div className="flex justify-center">
          <Image src="/paper-bg.png" alt="Paper background" width={580} height={0} className="absolute -z-10" />
          <div className={`relative w-[280px] md:w-[420px] mt-9 md:mt-12 text-xs md:text-base ${gloriaHallelujah.className}`}>
            <div className="flex justify-between">
              <p>Yoo Jeongyeon</p>
              <p>November 1, 1996</p>
            </div>
            <div className="max-[413px]:mt-4 mt-5 md:mt-8 max-[413px]:leading-normal leading-5 md:leading-7">
              <p>POSITION: Lead Vocalist</p>
              <p>ZODIAC SIGN: Scorpio</p>
              <p>HEIGHT: 167 cm</p>
              <p>MBTI: ISFJ</p>
              <p>NATIONALITY: Korean</p>
              <p>INSTAGRAM: @jy_piece</p>
            </div>
            <Image src="/jeongyeon-sign.png" alt="Jeongyeon signature" width={120} height={0} 
              className="absolute right-0 w-[80px] md:w-[120px]"
            />
            <Image src="/jeongyeon-kid.png" alt="A childhood photo of Jeongyeon" width={240} height={0} 
              className="absolute lg:top-0 -left-28 lg:-left-64"
            />
            <div className="absolute top-56 lg:top-16 -right-16 lg:-right-72 -rotate-6 uppercase">
              <Image src="/receipt-bg.png" alt="Twice member song credits" width={240} height={0} />
              <div className={`absolute w-[240px] flex flex-col items-center top-8 text-xs ${cutiveMono.className}`}>
                <h1 className={`text-3xl font-medium ${poppins.className}`}>TWICE</h1>
                <h2>SONG CREDITS</h2>
                <br />
                <div className="self-start ml-3">
                  <p>#0002 YOO JEONGYEON</p>
                  <p>NOVEMBER 1, 1996</p>
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
                      <td>LOVE LINE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>SWEET TALKER</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>21:29</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>LALALA</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>SWEET SUMMER DAY</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>CELEBRATE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>BLOOM</td>
                      <td className="text-end">2:29</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-y border-alternate-black border-dashed">
                    <tr>
                      <td colSpan={2}>Total Songs:</td>
                      <td className="text-end">07</td>
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