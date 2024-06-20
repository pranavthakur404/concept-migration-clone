import React from "react";

import DefaultButton from "../global/DefaultButton";

const Banner = () => {
  return (
    <div
      className="w-full h-[100vh] about-banner flex items-center relative rounded-bl-[50px]"
      style={{
        background: `url(https://conceptmigration.com/wp-content/uploads/2023/04/People.webp)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[100%] md:w-[50%] flex ml-5% px-5 ml-[2%] sm:ml-[5%] static z-[2]">
        <div>
          <h3 className="section-small-heading-size underline text-white font-[700]">
            About Us
          </h3>
          <p className="section-big-heading-size text-white font-[700]">
            Know More About Us
          </p>
          <p className="text-white content-font-size my-5">
            We provide comprehensive guidance and support to individuals and
            families navigating the complexities of immigration law.
          </p>

          <DefaultButton text={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
