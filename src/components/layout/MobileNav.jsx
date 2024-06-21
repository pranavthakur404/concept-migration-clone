import React from "react";
import { IoMdClose } from "react-icons/io";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = ({ isNav, setIsNav }) => {
  return (
    <div className="fixed top-0 left-0 inset-0 bg-[rgba(0,0,0,0.8)] z-[5]">
      <div className="bg-white max-w-[100%] w-[250px] h-[100vh] py-3 px-2">
        <div className="w-full flex justify-between items-center">
          <img src="" alt="" />
          <IoMdClose
            className="text-[25px] cursor-pointer"
            onClick={() => {
              setIsNav(false);
            }}
          />
        </div>
        <MobileNavLinks setIsNav={setIsNav} />
      </div>
    </div>
  );
};

export default MobileNav;
