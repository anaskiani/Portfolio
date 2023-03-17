import Link from "next/link";
import Image from "next/image";
import Anas from "../assets/Images/anas1.jpg";
// import Yellow from "../assets/Images/yellow.jpg"
const about = () => {
  return (
    <div id="about">
      <div className="pt-[0.3px] md:px-20 gap-10 grid grid-cols-2">
        <div>
          <div className="text-[#FDC435] text-[20px] ">
            Front end web developer
          </div>
          <div>
            <h2 className="text-4xl pt-[12px] pb-[20px] font-bold ">
              Hello, my name is Anas Kiani
            </h2>
            <p>
              I am a junior front end developer.I develop websites by using web
              technologies such as HTML, CSS,React and JavaScript.My aim is to
              develop web applications that can enhance user experience.
            </p>
          </div>
          <div className="flex gap-[12px] pt-[32px]">
            <Link href={'#projects'}>
            <button
              type="button"
              className="bg-[#FDC435] hover:border-2 hover:border-[#25282B]  rounded-sm px-4 py-1 font-semibold text-[#25282B]"
            >
              Projects
            </button>
            </Link>
            <Link href={'https://www.linkedin.com/in/anas-kiani-649a79263/'}>
            <button
              type="button"
              className="hover:border-[#25282B] hover:border-2 bg-[#FDC435] rounded-sm px-4 py-1 text-[#25282B] font-semibold"
            >
              LinkedIn
            </button>
            </Link>
          </div>
        </div>

        <div className="" id="bg">
          <div className="flex justify-center py-5">
        <Image src={Anas} alt="anas Image not found" width={250} height={250} className="rounded-[5599px] p-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default about;
