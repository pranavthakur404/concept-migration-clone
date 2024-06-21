import React, { useEffect } from "react";
import Banner from "../components/approvals/Banner";
import TestimonialConTainer from "../components/approvals/TestimonialConTainer";
import { useLocation } from "react-router-dom";

const Approvals = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Banner />
      <TestimonialConTainer />
    </div>
  );
};

export default Approvals;
