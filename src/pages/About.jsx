import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../components/about/Banner";
import Section2 from "../components/about/Section2";
import OurBusiness from "../components/about/OurBusiness";
import WhySection from "../components/about/WhySection";

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
