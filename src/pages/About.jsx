import React from "react";

import Banner from "../components/about/Banner";
import Section2 from "../components/about/Section2";
import OurBusiness from "../components/about/OurBusiness";
import WhySection from "../components/about/WhySection";

const About = () => {
  return (
    <div className="w-full">
      <Banner />
      <Section2 />
      <OurBusiness />
      <WhySection />
    </div>
  );
};

export default About;
