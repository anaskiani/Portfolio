import Link from "next/link";
const projects = () => {
  return (
    <div className="md:px-20 pb-20" id="projects">
      <h2 className="flex justify-center py-20 text-3xl font-semibold">
        Projects
      </h2>
      <div className="grid grid-cols-2 ">
        <div className=" bg-gray-100 p-20 rounded-sm">
          <h2 className="font-semibold text-3xl ">Digital Marketing</h2>
          <p className="py-5">
            I have created this project in order to show how to create an user
            interface in vs code using web technologies such as
            html,css,react,tailwind etc
          </p>
          <Link href={""}>
            <button className="hover:border-[#25282B] hover:border-2 bg-[#FDC435] rounded-sm px-4 py-1 text-[#25282B] font-semibold">
              View Project
            </button>
          </Link>
        </div>
        <div>2</div>
        <div>3</div>
        <div className=" bg-gray-100 p-20 rounded-sm">
          <h2 className="font-semibold text-3xl ">Survey Form</h2>
          <p className="py-5">
            I have created this project in order to show how to create a form in
            vs code using web technologies such as html,css,react,tailwind
            etc.The main purpose of this project is to build my portfolio.
          </p>
          <Link href={""}>
            <button className="hover:border-[#25282B] hover:border-2 bg-[#FDC435] rounded-sm px-4 py-1 text-[#25282B] font-semibold">
              View Project
            </button>
          </Link>
        </div>
        <div className=" bg-gray-100 p-20 rounded-sm">
          <h2 className="font-semibold text-3xl ">Product landing page </h2>
          <p className="py-5">
            I have completed this project to earn certification of the responsive web design in freeCodeCamp.org.But now i have changed the code and used nextjs and tailwind to build my portfolio.  
          </p>
          <Link href={""}>
            <button className="hover:border-[#25282B] hover:border-2 rounded-sm px-4 py-1 text-[#25282B] font-semibold bg-[#FDC435]">
              View Project
            </button>
          </Link>
        </div>
        <div>6</div>
      </div>
    </div>
  );
};
export default projects;
