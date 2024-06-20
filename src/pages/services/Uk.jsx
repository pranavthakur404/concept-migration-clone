import React from "react";

import Banner from "../../components/service/Banner";
import ChooseUsSection from "../../components/service/ChooseUsSection";
import Section1 from "../../components/service/uk/Section1";
import Section3 from "../../components/service/uk/Section3";

const Uk = () => {
  return (
    <>
      <Banner
        title={"United Kingdom"}
        subTitle={"Immigration To United Kingdom"}
      />
      <Section1 />
      <ChooseUsSection />
      <Section3 />
    </>
  );
};

export default Uk;
