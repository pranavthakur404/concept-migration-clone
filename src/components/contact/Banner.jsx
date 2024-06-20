import React from "react";

const Banner = ({ title }) => {
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
          <p className="banner-font-size text-white font-[700]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
