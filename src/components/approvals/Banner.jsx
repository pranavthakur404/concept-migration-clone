import React from "react";

import DefaultButton from "../global/DefaultButton";

const Banner = () => {
  return (
    <div
      className="w-full h-[85vh] approvals-banner flex items-center relative "
      style={{
        background: `url(https://conceptmigration.com/wp-content/uploads/2023/04/People.webp)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[100%] text-center static z-[2]">
        <div>
          <p className="banner-font-size text-center text-white font-[700]">
            Approvals & Testimonials
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
