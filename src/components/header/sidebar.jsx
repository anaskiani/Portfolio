import { MdOutlineContactPhone } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { TbInfoCircle } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";
import { useEffect, useRef } from "react";

export function Sidebar({ show, setShow }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setShow]);

  return (
    <div
      ref={sidebarRef}
      className={`bg-gray-100 text-black w-54 h-screen fixed top-0 left-0 z-10 md:hidden transition-transform  ${
        show ? "" : "hidden"
      }`}
    >
      <div>
        <h1 className="font-bold px-9 p-4 md:px-0 text-[22px] flex items-center justify-center">
          Anas Kiani
        </h1>
      </div>
      <div className=" flex flex-col gap-10 py-8 px-9 transition-transform">
        <a
          href="#about"
          className="hover:text-[#000] text-gray-500 font-semibold flex items-center gap-10 text-[18px] "
        >
          <TbInfoCircle size={23} /> About
        </a>
        <a
          href="#projects"
          className="hover:text-[#000] text-gray-500 flex items-center gap-10 text-[18px]"
        >
          <BsCodeSlash size={23} /> Projects
        </a>
        <a
          href="#contacts"
          className="hover:text-[#000] text-gray-500 flex items-center gap-10 text-[18px]"
        >
          <MdOutlineContactPhone size={23} /> Contacts
        </a>
        <div className="flex gap-5">
          <BsFacebook size={28} className=" my-2 text-[#3b5998]" />
          <BsWhatsapp size={28} className=" my-2 text-[#25d366] " />{" "}
          <BiPhoneCall size={28} className=" my-2 text-[#3b5998]" />
        </div>
      </div>
    </div>
  );
}
