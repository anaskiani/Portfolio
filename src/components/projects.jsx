import Link from "next/link";
const projects = () => {
  return (
    <div className="md:px-10 lg:px-20 px-5 pb-10" id="projects">
      <h2 className="flex justify-center py-10 text-3xl font-semibold">
        Projects
      </h2>
      <div className="grid md:grid-cols-2  ">
        <div className="md:hidden">digital web image</div>
        <div className=" bg-gray-100 px-5 py-5 lg:p-16 xl:p-20 rounded-sm">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl ">
            Digital Marketing
          </h2>
          <p className="py-5">
            This is a Digital Marketing agency website can be used to provide
            services regarding Digital Marketing.The web technologies used to
            build this website are html, css, react js, next js & tailwind css.
          </p>
          <Link href={""}>
            <button className="hover:bg-[#FDC435]  border-2 border-black  rounded-sm px-4 py-1 text-black font-semibold">
              View Project
            </button>
          </Link>
        </div>
        <div className="hidden md:flex">2</div>
        <div>3</div>
        <div className=" bg-gray-100 px-5 py-5 lg:p-16 xl:p-20 rounded-sm">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl ">
            Survey Form
          </h2>
          <p className="py-5">
            This form is usually used to collect user data.Input data is sent
            through email to website owner.This form is build using web
            technologies such as html, css, react js, tailwind css & next js.
          </p>
          <Link href={""}>
            <button className="hover:bg-[#FDC435]  border-2 border-black  rounded-sm px-4 py-1 text-black font-semibold">
              View Project
            </button>
          </Link>
        </div>
        <div className="md:hidden">product image</div>
        <div className=" bg-gray-100 px-5 py-5 lg:p-16 xl:p-20 rounded-sm">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl ">
            Product landing page{" "}
          </h2>
          <p className="py-5">
            This is a web page developed to promote or sell products.Web
            technologies used to develop this page are html, css, tailwind css,
            react js & next js.
          </p>
          <Link href={""}>
            <button className="hover:bg-[#FDC435]  border-2 border-black  rounded-sm px-4 py-1 text-black font-semibold">
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
