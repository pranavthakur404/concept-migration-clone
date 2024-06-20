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
      {isNav && <MobileNav isNav={isNav} setIsNav={setIsNav} />}
      <HeaderTopNotification />
      <Header isNav={isNav} setIsNav={setIsNav} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
