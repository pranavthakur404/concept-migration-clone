import React from "react";

import Container from "../../global/Container";
import ServiceCard from "../ServiceCard";

const Section3 = ({ title, subTitle }) => {
  return (
    <Container>
      <div className="my-[100px]">
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            United Kingdom
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Explore Other Programs
          </p>
          <p className="secondary-text-color content-font-size">
            The following programs are among those for which we provide
            migration services.
          </p>
        </div>
        <div className="mt-10 service-list-container">
          {data.map((list) => {
            return <ServiceCard key={list.id} {...list} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Section3;

const data = [
  {
    id: 1,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/nintchdbpict000403308774-2048x1367.jpg",
    title: "UK Nurses Visa",
    subTitle: "Join the UK's esteemed nursing workforce with ease.",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/2001065-2048x1287.webp",
    title: "UK Study Visa",
    subTitle: "Discover excellence through education with a UK study visa.",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/1615210327_285060_url-2.jpeg",
    title: "UK Work Visa",
    subTitle:
      "Experience the thrill of Working in the UK with Our Work Permits.",
  },
  {
    id: 4,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/12_Apostles_Australia.jpg",
    title: "UK Startup Visa",
    subTitle: "Opening Doors to Talent, Innovation and growth in the UK",
  },
];
