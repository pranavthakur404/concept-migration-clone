import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../components/home/Banner";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import StepsSection from "../components/home/StepsSection";
import CountryWeOffer from "../components/home/CountryWeOffer";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import FindOutSection from "../components/home/FindOutSection";
import Tesimonials from "../components/home/Testimonials";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Banner />
      <Section2 />
      <Section3 />
      <StepsSection />
      <CountryWeOffer />
      <WhyChooseUsSection />
      <Tesimonials />
      <FindOutSection />
    </div>
  );
};

export default Home;
