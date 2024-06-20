import React from "react";
import GoogleMaps from "./GoogleMaps";
import ContactForm from "./ContactForm";

const BottomSection = () => {
  return (
    <div
      className="w-[90%] my-0 mx-auto border-2 border-gray-300 rounded-md  md:flex md:justify-between mt-[50px] shadow"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="w-full md:w-[50%] py-[5%] px-[5%]">
        <GoogleMaps></GoogleMaps>
      </div>
      <div className="w-full md:w-[50%] py-[5%] px-[5%]">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default BottomSection;
