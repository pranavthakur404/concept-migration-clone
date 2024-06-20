import React from "react";

import Container from "../../global/Container";
import ServiceCard from "../ServiceCard";

const Section3 = ({ title, subTitle }) => {
  return (
    <Container>
      <div className="my-[100px]">
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Canada
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Explore Other Programs
          </p>
          <p className="secondary-text-color content-font-size">
            The following programs are among those for which we provide
            immigration services.
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
    title: "Australia Sub Class 400",
    subTitle:
      "Get Australia Sub Class 400 Visa and start your life in Australia",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/2001065-2048x1287.webp",
    title: "Australia Immigration",
    subTitle: "Australia is best destination for education, live & work",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/1615210327_285060_url-2.jpeg",
    title: "Austrlia Spouse Visa",
    subTitle:
      "Join your hearts and your lives in Australia with our Spouse visa...",
  },
  {
    id: 4,
    img: "https://conceptmigration.com/wp-content/uploads/2023/05/12_Apostles_Australia.jpg",
    title: "Australia Sub Class 489",
    subTitle:
      "Experience the charm of regional Australia with Subclass 489 Visa",
  },
];
