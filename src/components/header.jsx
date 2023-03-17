export default function header () {
return(
 <div  className="md:px-20 py-3 flex items-center bg-[#FDC435]">
    <div className="font-bold">
        Anas Kiani
    </div>
    <div className= "hello md:flex justify-end grow gap-[48px]" >
        <a href="#about" className="hover:text-indigo-600 hover:underline">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
 </div>
);
}