import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full sm:max-w-[900px] md:max-w-[1200px] my-0 mx-auto px-3">
      {children}
    </div>
  );
};

export default Container;
