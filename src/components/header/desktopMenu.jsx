import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "./sidebar";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
export function DesktopMenu() {
  const [show, setShow] = useState(false);

  return (
    <div className="md:px-10 lg:px-20  flex items-center">
      <div className="font-bold  px-5 md:px-0 text-[22px]">Anas Kiani</div>

      <div className="flex px-5 justify-end grow  md:hidden py-2 md:py-0">
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="  flex items-center text-black"
          aria-label="menuicon"
        >
          {show === true ? "" : <FiMenu size={28} />}
        </button>
      </div>
      <Sidebar show={show} setShow={setShow} className="  " />

      <div className=" md:flex justify-center items-center grow gap-[48px] xl:gap-[80px] hidden">
        <a
          href="#about"
          className="hover:text-[#000] text-gray-500 font-semibold text-[17px]"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-[#000] text-gray-500 font-semibold text-[17px]"
        >
          Projects
        </a>
        <a
          href="#contacts"
          className="hover:text-[#000] text-gray-500 font-semibold text-[17px]"
        >
          Contacts
        </a>
      </div>
      <div className="md:flex gap-5 hidden">
        <Link href={"https://www.facebook.com/anaskayani.kayani.7"}>
          <BsFacebook
            size={30}
            className=" my-2 text-[#3b5998] hover:scale-110"
          />
        </Link>
        <Link href={"https://wa.me/+92405441986"}>
          <BsWhatsapp
            size={30}
            className="my-2 text-[#25d366] hover:scale-110"
          />
        </Link>
        <Link href="tel:+923405441986">
          <BiPhoneCall
            size={30}
            className=" my-2 text-[#3b5998] hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
