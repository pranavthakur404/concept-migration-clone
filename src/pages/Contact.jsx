import React from "react";

import Banner from "../components/contact/Banner";
import Container from "../components/global/Container";
import ContactDetails from "../components/contact/ContactDetails";
import BottomSection from "../components/contact/BottomSection";

const Contact = () => {
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
