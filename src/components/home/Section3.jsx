import React from "react";

import Container from "../global/Container";
import { FaHandHoldingWater } from "react-icons/fa";
import VisaTypeCard from "./VisaTypeCard";

const Section3 = () => {
  return (
    <div className="w-full bg-[#F0F3F9] py-10">
      <Container>
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Visa Types
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Discover The Different Visa Types
          </p>
          <p className="secondary-text-color content-font-size">
            Our team of experienced professionals can assist with visa
            applications, document preparation, and submission to ensure a
            smooth and hassle-free process.
          </p>
        </div>
        <div className="visaCardContainer mt-10">
          {data &&
            data.map((list) => {
              return <VisaTypeCard key={list.id} {...list} />;
            })}
        </div>
      </Container>
    </div>
  );
};

export default Section3;

const data = [
  {
    id: 1,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/naluda-man-working-laptop.jpg",
    icon: <FaHandHoldingWater />,
    title: " Convenience",
    content:
      "Our services are designed to provide a hassle-free experience for our clients, with flexible scheduling.",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/naluda-man-working-laptop.jpg",
    icon: <FaHandHoldingWater />,
    title: " Convenience",
    content:
      "Our services are designed to provide a hassle-free experience for our clients, with flexible scheduling.",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/naluda-man-working-laptop.jpg",
    icon: <FaHandHoldingWater />,
    title: " Convenience",
    content:
      "Our services are designed to provide a hassle-free experience for our clients, with flexible scheduling.",
  },
];
