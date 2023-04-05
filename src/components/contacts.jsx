const Contacts = () => {
  return (
    <div className="pb-10 px-5  lg:px-20" id="contacts">
      <h2 className="flex justify-center pb-10 text-3xl font-semibold">
        Contacts
      </h2>
      <form>
        <div className="grid md:grid-cols-[1fr_2fr_1fr] lg:gap-5 xl:gap-10 2xl:gap-14">
          <div></div>
          <div className="flex flex-col px-5 xl:px-12">
            <label htmlFor="username" className="block ">
              Username{" "}
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="  Enter your name here"
              className="border-2 border-gray-200 py-1 rounded-sm"
            ></input>
            <label htmlFor="email" className="block py-2">
              Email{" "}
            </label>
            <input
              id="email"
              type="text"
              placeholder="  Enter your email here"
              className="border-2 border-gray-200 py-1 rounded-sm"
            ></input>
            <label htmlFor="message" className="block py-2 ">
              Message{" "}
            </label>
            <input
              id="message"
              type="text"
              placeholder="  Enter your message here"
              className=" border-2 border-gray-200 pb-20 rounded-sm"
            ></input>
            <div className="  grid grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-10 2xl:gap-24">
              <div></div>
              <button
                type="submit"
                className="hover:bg-[#FDC435] border-2 border-black flex  justify-center rounded-sm mt-5 py-1 text-[#25282B] font-semibold"
              >
                Submit
              </button>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
