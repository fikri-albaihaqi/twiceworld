import { cutiveMono, gloriaHallelujah, poppins } from "@/app/assets/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-[1000px] md:min-h-screen lg:h-[900px] flex justify-center overflow-hidden">
      <Image src="/jihyo-bg.png" alt="Jihyo background image" fill={true} 
        className="object-cover -z-10"
      />
      <div className="flex flex-col items-center mt-32 md:mt-72 lg:mt-56">
        <Image src="/jihyo-ransome-note.svg" alt="Jihyo" width={400} height={0} className="w-[300px] md:w-[400px]" />
        <div className="flex justify-center">
          <Image src="/paper-bg.png" alt="Paper background" width={580} height={0} className="absolute -z-10" />
          <div className={`relative w-[280px] md:w-[420px] mt-9 md:mt-12 text-xs md:text-base ${gloriaHallelujah.className}`}>
            <div className="flex justify-between">
              <p>Park Jihyo</p>
              <p>February 1, 1997</p>
            </div>
            <div className="max-[413px]:mt-4 mt-5 md:mt-8 max-[413px]:leading-normal leading-5 md:leading-7">
              <p>POSITION: Leader, Main Vocalist</p>
              <p>ZODIAC SIGN: Aquarius</p>
              <p>HEIGHT: 160 cm</p>
              <p>MBTI: ESFP</p>
              <p>NATIONALITY: Korean</p>
              <p>INSTAGRAM: @_zyozyo</p>
            </div>
            <Image src="/jihyo-sign.png" alt="Jihyo signature" width={120} height={0} 
              className="absolute right-0 w-[80px] md:w-[120px]"
            />
            <Image src="/jihyo-kid.png" alt="A childhood photo of Jihyo" width={240} height={0} 
              className="absolute -z-10 -left-28 md:left-[95%] lg:left-0 md:top-16 lg:top-56 lg:mt-8 -rotate-[18deg] lg:rotate-0"
            />
            <div className="absolute top-56 md:top-80 lg:top-16 -right-20 lg:-right-72 -rotate-6 uppercase">
              <Image src="/receipt-bg.png" alt="Twice member song credits" width={240} height={0} />
              <div className={`absolute w-[240px] flex flex-col items-center top-8 text-xs ${cutiveMono.className}`}>
                <h1 className={`text-3xl font-medium ${poppins.className}`}>TWICE</h1>
                <h2>SONG CREDITS</h2>
                <br />
                <div className="self-start ml-3">
                  <p>#0005 PARK JIHYO</p>
                  <p>FEBRUARY 1, 1997</p>
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
                      <td>EYE EYE EYES</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>24/7</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>21:29</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>HO!</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>SUNSET</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>GIRLS LIKE US</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>GET LOUD</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>UP NO MORE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>WISHING ON YOU</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>ROOM</td>
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
                  <p>#0005 PARK JIHYO</p>
                  <p>FEBRUARY 1, 1997</p>
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
                      <td>FIRST TIME</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>CACTUS</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>REAL YOU</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>CELEBRATE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>TROUBLE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>NIGHTMARE</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>TALKIN&apos; ABOUT IT</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>CLOSER</td>
                      <td className="text-end">2:29</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>DON&apos;T WANNA GO BACK</td>
                      <td className="text-end">2:29</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-y border-alternate-black border-dashed">
                    <tr>
                      <td colSpan={2}>Total Songs:</td>
                      <td className="text-end">09</td>
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