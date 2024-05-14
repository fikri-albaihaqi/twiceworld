import { cutiveMono, gloriaHallelujah, poppins } from "@/app/assets/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-[1000px] md:min-h-screen lg:h-[900px] flex justify-center overflow-hidden">
      <Image src="/chaeyoung-bg.png" alt="Chaeyoung background image" fill={true} 
        className="object-cover -z-10"
      />
      <div className="flex flex-col items-center mt-32 md:mt-72 lg:mt-56">
        <Image src="/chaeyoung-ransome-note.svg" alt="Chaeyoung" width={400} height={0} className="w-[300px] md:w-[400px]" />
        <div className="flex justify-center">
          <Image src="/paper-bg.png" alt="Paper background" width={580} height={0} className="absolute -z-10" />
          <div className={`relative w-[280px] md:w-[420px] mt-9 md:mt-12 text-xs md:text-base ${gloriaHallelujah.className}`}>
            <div className="flex justify-between">
              <p>Son Chaeyoung</p>
              <p>April 23, 1999</p>
            </div>
            <div className="max-[413px]:mt-4 mt-5 md:mt-8 max-[413px]:leading-normal leading-5 md:leading-7">
              <p>POSITION: Main Rapper, Sub Vocalist</p>
              <p>ZODIAC SIGN: Taurus</p>
              <p>HEIGHT: 158.9 cm</p>
              <p>MBTI: INFP</p>
              <p>NATIONALITY: Korean</p>
              <p>INSTAGRAM: @chaeyo.0</p>
            </div>
            <Image src="/chaeyoung-sign.png" alt="Chaeyoung signature" width={120} height={0} 
              className="absolute right-0 w-[80px] md:w-[120px]"
            />
            <Image src="/chaeyoung-kid.png" alt="A childhood photo of Chaeyoung" width={240} height={0} 
              className="absolute -z-10 -left-28 md:left-[95%] lg:left-0 md:top-16 lg:top-56 lg:mt-8 -rotate-[18deg] lg:rotate-0"
            />
            <div className="absolute top-56 md:top-80 lg:top-16 -right-20 lg:-right-72 -rotate-6 uppercase">
              <Image src="/receipt-bg.png" alt="Twice member song credits" width={240} height={0} />
              <div className={`absolute w-[240px] flex flex-col items-center top-8 text-xs ${cutiveMono.className}`}>
                <h1 className={`text-3xl font-medium ${poppins.className}`}>TWICE</h1>
                <h2>SONG CREDITS</h2>
                <br />
                <div className="self-start ml-3">
                  <p>#0008 SON CHAEYOUNG</p>
                  <p>APRIL 23, 1999</p>
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
                      <td>PRECIOUS LOVE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>EYE EYE EYES</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>21:29</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>MISSING U</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>DON'T GIVE UP</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>SWEET TALKER</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>YOUNG & WILD</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>STRAWBERRY</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>MY GUITAR</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>HOW U DOIN'</td>
                      <td className="text-end">2:29</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-y border-alternate-black border-dashed">
                    <tr>
                      <td colSpan={2}>Total Songs:</td>
                      <td className="text-end">10</td>
                    </tr>
                  </tfoot>
                </table>
                <br />
                <p>One in a million!</p>
                <Image src="/barcode.png" alt="Twice Barcode" width={150} height={0} />
              </div>
            </div>
            <div className="absolute -z-10 top-[350px] md:top-64 lg:top-0 -left-16 lg:-left-64 rotate-2 uppercase">
              <Image src="/receipt-bg.png" alt="Twice member song credits" width={240} height={0} />
              <div className={`absolute w-[240px] flex flex-col items-center top-8 text-xs ${cutiveMono.className}`}>
                <h1 className={`text-3xl font-medium ${poppins.className}`}>TWICE</h1>
                <h2>SONG CREDITS</h2>
                <br />
                <div className="self-start ml-3">
                  <p>#0008 SON CHAEYOUNG</p>
                  <p>APRIL 23, 1999</p>
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
                      <td>SWEET SUMMER DAY</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>HANDLE IT</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>THE FEELS(KR VER)</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>CELEBRATE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>BASICS</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>RUSH</td>
                      <td className="text-end">2:29</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-y border-alternate-black border-dashed">
                    <tr>
                      <td colSpan={2}>Total Songs:</td>
                      <td className="text-end">06</td>
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