import React from "react";
import { NavLink } from "react-router-dom";

const DefaultButton = ({ text, to }) => {
  return (
    <NavLink to={to}>
      <button
        type="button"
        className="bg-[#125476] hover:bg-white border hover:text-[#0f1d4a] transform duration-500 hover:border-[#125476] text-white px-5 py-3 rounded-br-xl
      rounded-tl-xl  hover:rounded-tr-xl hover:rounded-bl-xl hover:rounded-tl-none  hover:rounded-br-none content-font-size font-[500]"
      >
        {text}
      </button>
    </NavLink>
  );
};

export default DefaultButton;
