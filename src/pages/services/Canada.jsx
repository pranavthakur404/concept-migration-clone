import React, { useEffect } from "react";

import Banner from "../../components/service/Banner";
import Section1 from "../../components/service/canada/Section1";
import { useLocation } from "react-router-dom";
import ChooseUsSection from "../../components/service/ChooseUsSection";
import Section3 from "../../components/service/canada/Section3";

const Canada = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Banner title={"Canada"} subTitle={"Migration To Canada "} />
      <Section1 />
      {/* <ChooseUsSection /> */}
      {/* <Section3 /> */}
    </>
  );
};

export default Canada;
