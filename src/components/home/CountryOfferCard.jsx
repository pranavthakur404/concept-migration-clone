import React from "react";

import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const CountryOfferCard = ({ title, subTitle, img, to }) => {
  return (
    <div className="w-full  shadow relative countryCard overflow-hidden">
      <img src={img} alt="" className="w-full h-[35vh]" />
      <div className="py-5 px-10  bg-white">
        <p className="section-small-heading-size font-[600]">{title}</p>
        <p className="content-font-size primary-text-color">{subTitle}</p>
      </div>

      {/* floating button */}
      <NavLink to={to}>
        <div className="CountryCardButton w-[200px] h-[200px] flex justify-center items-center transition duration-700">
          <FaArrowRight />
          {"->"}
        </div>
      </NavLink>
    </div>
  );
};

export default CountryOfferCard;
