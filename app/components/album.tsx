import Link from "next/link";
import Image from "next/image";

export default function Album({
  img,
  name,
} : {
  img: string;
  name: string;
}) {
  return(
    <Link href="/" className="my-6">
      <Image src={img} alt={name} width={360} height={360} />
    </Link>
  )
}