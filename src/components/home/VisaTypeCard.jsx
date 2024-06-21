import React from "react";

const VisaTypeCard = ({ img, content, title, icon }) => {
  return (
    <div className="w-full group">
      <img
        src={img}
        alt=""
        className="rounded-lg w-full sm:h-[40vh] shadow visa-card-image relative"
      />
      {/* content */}
      <div className="flex gap-3 items-center my-5 cursor-pointer bg-white py-3 px-2 border primary-border-color rounded-lg shadow">
        {/* icon */}
        <div>
          <span className="w-[55px] h-[55px] primary-text-color group-hover:text-white border primary-border-color text-[25px] rounded-full bg-transparent group-hover:bg-[#0f1d4a] transform  flex justify-center items-center duration-700  cursor-pointer">
            {icon}
          </span>
        </div>

        {/* text */}
        <div>
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            {title}
          </h3>
          <p className="secondary-text-color content-font-size">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default VisaTypeCard;
