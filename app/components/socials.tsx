import { faFacebookF, faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Socials = ({
  vertical,
}: {
  vertical: boolean
}) => {
  return (
    vertical ? (
      <ul className="relative flex flex-col justify-center items-center mx-4 w-[100px] before:content-[''] before:absolute 
        before:bg-white before:w-[2px] before:h-[150px] before:left-0">
        <a href="https://www.instagram.com/twicetagram/" target="_blank" className="my-0.5">
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ffff" }} />
        </a>
        <a href="https://twitter.com/JYPETWICE" target="_blank" className="my-0.5">
          <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "#ffff" }} />
        </a>
        <a href="https://www.facebook.com/JYPETWICE" target="_blank" className="my-0.5">
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: "#ffff" }} />
        </a>
        <a href="https://www.youtube.com/@TWICE" target="_blank" className="my-0.5">
          <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ffff" }} />
        </a>
        <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank" className="my-0.5">
          <FontAwesomeIcon icon={faTiktok} size="lg" style={{ color: "#ffff" }} />
        </a>
      </ul>
    ) : (
      <ul className="flex absolute top-8">
        <a href="https://www.instagram.com/twicetagram/" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#3D3C3A" }} />
        </a>
        <a href="https://twitter.com/JYPETWICE" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "#3D3C3A" }} />
        </a>
        <a href="https://www.facebook.com/JYPETWICE" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: "#3D3C3A" }} />
        </a>
        <a href="https://www.youtube.com/@TWICE" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#3D3C3A" }} />
        </a>
        <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faTiktok} size="lg" style={{ color: "#3D3C3A" }} />
        </a>
      </ul>
    )
  )
}

export default Socials