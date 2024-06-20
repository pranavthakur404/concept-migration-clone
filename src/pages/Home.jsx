import React from "react";

import Banner from "../components/home/Banner";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import StepsSection from "../components/home/StepsSection";
import CountryWeOffer from "../components/home/CountryWeOffer";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import FindOutSection from "../components/home/FindOutSection";
import Tesimonials from "../components/home/Testimonials";

const Home = () => {
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
