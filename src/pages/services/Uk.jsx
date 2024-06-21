import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../../components/service/Banner";
import ChooseUsSection from "../../components/service/ChooseUsSection";
import Section1 from "../../components/service/uk/Section1";
import Section3 from "../../components/service/uk/Section3";

const Uk = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Banner
        title={"United Kingdom"}
        subTitle={"Immigration To United Kingdom"}
      />
      <Section1 />
      {/* <ChooseUsSection /> */}
      {/* <Section3 /> */}
    </>
  );
};

export default Uk;
