import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import HeaderTopNotification from "../components/layout/HeaderTopNotification";
import MobileNav from "../components/layout/MobileNav";

const RootLayout = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      <img
        src="https://www.svgrepo.com/show/28155/whatsapp.svg"
        alt=""
        className="w-[50px] h-[50px] fixed bottom-5 right-5 z-[3]"
      />
      {isNav && <MobileNav isNav={isNav} setIsNav={setIsNav} />}
      <HeaderTopNotification />
      <Header isNav={isNav} setIsNav={setIsNav} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
