import Link from "next/link";
import { BsGithub } from "react-icons/Bs"
import { GrLinkedin } from "react-icons/gr"
import { ImMail } from "react-icons/im"
const icons = () => {
    return(
        <div className="pb-10">
            <div className="flex justify-center gap-5">
                <Link href={"https://github.com/anaskiani"}>
                <BsGithub size={28} />
                </Link>
              <Link href={"https://www.linkedin.com/in/anas-kiani-649a79263/"}> 
              <GrLinkedin size={28} />
                 </Link>  
                 <Link href={"mailto:manaskiani@gmail.com"}>
                <ImMail size={28} />
                 </Link>
            </div>
        </div>
    );
}
export default icons;