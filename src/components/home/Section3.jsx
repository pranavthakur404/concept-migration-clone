import React, { useState } from "react";

import Container from "../global/Container";
import { FaHandHoldingWater } from "react-icons/fa";
import VisaTypeCard from "./VisaTypeCard";
import { FaBook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ContactModal from "./ContactModal";

import { FaSuitcase } from "react-icons/fa6";

const Section3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />}

      <div className="w-full py-[50px] bg-[#F0F3F9]">
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
                return (
                  <VisaTypeCard
                    key={list.id}
                    {...list}
                    setIsModalOpen={setIsModalOpen}
                  />
                );
              })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section3;

const data = [
  {
    id: 1,
    img: "https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-a-delightful-reunion-a-couple-visits-their-parents-at-home-for-a-family-gettogether-photo-image_51809524.jpg",
    icon: <FaSuitcase />,
    title: "Visit",
    content:
      "Unlock your Global Career with a Work Visa - Your Ticket to Professional Growth Abroad!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?cs=srgb&dl=pexels-olly-941555.jpg&fm=jpg",
    icon: <FaRegUser />,
    title: "Work",
    content:
      "Open doors to boundless business growth and international networks with business visa",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/i-11.webp",
    icon: <FaBook />,
    title: "Study",
    content:
      "Explore endless academic possibilities and broaden your horizons with Apex World Advisors Services",
  },
];
