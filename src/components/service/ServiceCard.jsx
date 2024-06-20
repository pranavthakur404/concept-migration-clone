import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";

const ServiceCard = ({ img, title, subTitle }) => {
  return (
    <div className="w-full border rounded-lg  shadow primary-border-color">
      {/* image */}
      <div className="w-full overflow-hidden relative">
        <img src={img} alt="" className="w-full" />
      </div>
      {/* info details */}
      <div className="w-full text-center relative py-7 px-3">
        <span className="absolute top-[-35px] left-[40%] primary-bg-color text-white p-[12px] text-[25px] rounded-full  block">
          <FaRegThumbsUp />
        </span>
        <p className="section-small-heading-size font-[700] primary-text-color">
          {title}
        </p>
        <p className="content-font-size secondary-text-color my-2">
          {subTitle}
        </p>
        {/* <button className="flex items-center gap-2 primary-bg-color text-white text-[14px] py-3 px-7 rounded-full absolute left-[25%] bottom-[-20px]">
          READ MORE <FaArrowRightLong />
        </button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
