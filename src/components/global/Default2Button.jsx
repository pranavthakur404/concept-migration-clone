import React from "react";

import { NavLink } from "react-router-dom";

const Default2Button = ({ text, to }) => {
  return (
    <NavLink to={to}>
      <button
        type="button"
        className="bg-white  hover:bg-[#0f1d4a] border hover:text-white transform duration-500 border-[#0f1d4a] text-[#0f1d4a] px-5 py-3 rounded-br-xl
  rounded-tl-xl  hover:rounded-tr-xl hover:rounded-bl-xl hover:rounded-tl-none  hover:rounded-br-none content-font-size font-[500]"
      >
        {text}
      </button>
    </NavLink>
  );
};

export default Default2Button;
