import React from "react";

import DefaultButton from "../global/DefaultButton";
import Default2Button from "../global/Default2Button";

const StepsCard = ({ icon, title, content, step }) => {
  return (
    <div className="w-full">
      <button className="primary-bg-color text-white py-1 px-5 rounded-xl text-[14px] mb-5">
        STEP 0{step}
      </button>
      <div className="w-full flex gap-5 items-center">
        <img src={icon} alt="" className="w-[45px] h-[45px]" />
        <p className="text-[22px] font-[700] primary-text-color">{title}</p>
      </div>
      <div>
        <p className="text-[18px] my-3 secondary-text-color">{content}</p>
        <Default2Button text="Know More" />
      </div>
    </div>
  );
};

export default StepsCard;
