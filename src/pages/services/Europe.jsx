import React, { useEffect } from "react";
import Banner from "../../components/service/Banner";
import ChooseUsSection from "../../components/service/ChooseUsSection";
import { useLocation } from "react-router-dom";
import Section1 from "../../components/service/europe/Section1";

const Europe = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Banner title={"Europe"} subTitle={"Immigration To Europe "} />
      <Section1 />
    </>
  );
};

export default Europe;
