import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../components/contact/Banner";
import Container from "../components/global/Container";
import ContactDetails from "../components/contact/ContactDetails";
import BottomSection from "../components/contact/BottomSection";

const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Banner title={"Contact Us"} />
      <Container>
        <div className="w-full">
          <ContactDetails />
          <BottomSection />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
