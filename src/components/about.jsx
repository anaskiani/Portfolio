import Link from "next/link";
import Image from "next/image";
import Anas from "../assets/Images/anas1.jpeg";
const about = () => {
  return (
    <div id="about" className="">
      <div className="md:pt-[20px] px-5 md:px-10 lg:px-20 gap-5 md:gap-10 grid md:grid-cols-2 items-center">
        <div>
          <div className="md:hidden" id="bg">
            <div className="flex justify-center py-5">
              <Image
                src={Anas}
                alt="anas Image not found"
                width="100%"
                height="auto"
                className="rounded-xl border-[1px]  shadow-sm "
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="  md:text-2xl lg:pt-[12px] font-bold ">Hello,</h2>
            <p>
              I am{" "}
              <span className="font-bold">
                Anas Kiani junior front end developer
              </span>
              .I develop websites by using web technologies such as
              <span className="font-semibold">
                {" "}
                Html, Css, React js, Tailwind css and Basic Javascript
              </span>
              .My aim is to develop web applications that can enhance user
              experience.
            </p>
          </div>
          <div className="flex gap-[12px] pt-[32px]">
            <Link href={"#projects"}>
              <button
                type="button"
                className="hover:bg-[#FDC435]  border-2 border-black  rounded-sm px-4 py-1 text-black font-semibold"
              >
                Projects
              </button>
            </Link>
            <Link href={"https://www.linkedin.com/in/anas-kiani-649a79263/"}>
              <button
                type="button"
                className="hover:bg-[#FDC435]  border-2 border-black  rounded-sm px-4 py-1 text-black font-semibold"
              >
                LinkedIn
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center " id="bg">
          <div className="flex justify-center  py-5">
            <Image
              src={Anas}
              alt="anas Image not found"
              width="100%"
              height="auto"
              className="rounded-lg max-h-[230px] max-w-[240px] xl:max-w-[250px] xl:max-h-[230px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default about;
