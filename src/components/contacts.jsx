const contacts = () => {
  return (
    <div className="pb-10 px-20" id="contacts">
      <h2 className="flex justify-center pb-10 text-3xl font-semibold">
        Contacts
      </h2>
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex flex-col ">
          <label htmlFor="full_name" className="block ">
            Name{" "}
          </label>
          <input
            id="full_name"
            type="text"
            placeholder="Enter your name here"
            className="border-2 border-gray-200 py-1 rounded-sm"
          ></input>
          <label htmlFor="email" className="block py-2">
            Email{" "}
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email here"
            className="border-2 border-gray-200 py-1 rounded-sm"
          ></input>
          <label htmlFor="message" className="block py-2 ">
            Message{" "}
          </label>
          <input
            id="message"
            type="text"
            placeholder="Enter your message here"
            className=" border-2 border-gray-200 pb-20 rounded-sm"
          ></input>
          <div className="  grid grid-cols-[1fr_2fr_1fr] gap-3 ">
            <div></div>
            <div className="hover:border-[#25282B] hover:border-2 flex  justify-center bg-[#FDC435] rounded-sm mt-5 py-1 text-[#25282B] font-semibold">
              Submit
              </div>
              <div></div>
              </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default contacts;
