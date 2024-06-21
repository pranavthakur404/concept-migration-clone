import React from "react";

import Banner from "../../components/service/Banner";
import Section1 from "../../components/service/canada/Section1";
import ChooseUsSection from "../../components/service/ChooseUsSection";
import Section3 from "../../components/service/canada/Section3";

const Canada = () => {
  return (
    <>
      <Banner title={"Canada"} subTitle={"Immigration To Canada "} />
      <Section1 />
      {/* <ChooseUsSection /> */}
      <Section3 />
    </>
  );
};

export default Canada;
