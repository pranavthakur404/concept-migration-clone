import React from "react";
import ChooseUsForm from "./ChooseUsForm";
import Container from "../global/Container";
import ChooseUsLeftSection from "./ChooseUsLeftSection";

const WhyChooseUsSection = () => {
  return (
    <div className="full py-[50px]">
      <Container>
        <div className="w-full flex flex-wrap  md:flex-nowrap justify-between">
          {/* left */}
          <div className="w-[100%] md:w-[50%] flex  items-center">
            <ChooseUsLeftSection />
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%] mt-10 md:mt-0">
            <ChooseUsForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUsSection;
