import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navList = [
    {
      name: "About",
      url: "#about-section",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Professional expericence",
      url: "#experience",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Education",
      url: "#education",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="bg-white shadow-md sticky top-0 z-10 py-2 px-4">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 items-center">
        <div>
          <span className="text-xl font-bold bg-black text-white px-3 py-1 rounded-full">
            SF
            <span className="text-[10px] font-thin italic">syed fahed</span>
          </span>
        </div>
        <div className="xl:flex lg:flex xl:gap-12 lg:gap-6 col-span-2 justify-end md:hidden hidden pr-5">
          {navList.map((list, index) => {
            return (
              <a
                key={index}
                href={list.url}
                className="text-[16px] font-normal hover:text-blue-500"
              >
                {list.name}
              </a>
            );
          })}
        </div>
        <div className=" block xl:hidden lg:hidden text-right">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon
            size='xl'
              className="text-black"
              icon={isOpen ? faTimes : faBars}
            />
          </button>
        </div>
      </div>
      {isOpen && (
       <div className="h-[100vh] mt-10  block xl:hidden lg:hidden">
         <div className="flex flex-col gap-4">
          {navList.map((list, index) => {
            return (
              <a
                key={index}
                href={list.url}
                className="text-[16px] font-normal hover:text-blue-500"
                onClick={()=>setIsOpen(false)}
              >
                {list.name}
              </a>
            );
          })}
        </div>
       </div>
      )}
    </div>
  );
};
export { NavBar };
