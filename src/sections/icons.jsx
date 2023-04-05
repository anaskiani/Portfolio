import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { ImMail } from "react-icons/im";
const icons = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-center gap-5">
        <Link href={"https://github.com/anaskiani"} aria-label="Github">
          <BsGithub size={28} className="hover:scale-110" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/anas-kiani-649a79263/"}
          aria-label="Linkedin"
        >
          <GrLinkedin size={28} className="hover:scale-110 rounded-sm" />
        </Link>
        <Link href={"mailto:manaskiani@gmail.com"} aria-label="Mail">
          <ImMail size={28} className="hover:scale-110 rounded-sm" />
        </Link>
      </div>
    </div>
  );
};
export default icons;
