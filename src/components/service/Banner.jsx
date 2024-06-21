import React from "react";

import DefaultButton from "../global/DefaultButton";

const Banner = ({ title, subTitle }) => {
  return (
    <div
      className="w-full h-[50vh] sm:h-[60vh] md:h-[100vh] about-banner flex items-center relative rounded-bl-[50px]"
      style={{
        background: `url(https://conceptmigration.com/wp-content/uploads/2021/10/ski1018-town-banff3b-2.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[100%]  px-5 text-center  static z-[2]">
        <div>
          <h3 className="section-small-heading-size underline text-white font-[700] mb-3">
            {title}
          </h3>
          <p className="banner-font-size text-white font-[700]">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
