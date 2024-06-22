import React from "react";
import Container from "../global/Container";
import NavigationLinks from "./NavigationLinks";
import { IoMenu } from "react-icons/io5";

import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = ({ isNav, setIsNav }) => {
  return (
    <div className="w-full shadow sticky top-0 z-[3] bg-white">
      <Container>
        <div className="w-full flex justify-between items-center py-5 md:py-0 ">
          <NavLink to={"/"}>
            <img src={Logo} className="w-[125px]" alt="" />
          </NavLink>
          <div className="hidden md:block">
            <NavigationLinks />
          </div>

          <IoMenu
            className="primary-text-color text-[30px] md:hidden cursor-pointer"
            onClick={() => {
              setIsNav(true);
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
