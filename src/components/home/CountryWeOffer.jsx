import React from "react";

import Container from "../global/Container";
import CountryOfferCard from "./CountryOfferCard";

const CountryWeOffer = () => {
  return (
    <div className="w-full bg-[#F0F3F9] py-[50px]">
      <Container>
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Countries
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Countries We Offer
          </p>
          <p className="secondary-text-color content-font-size">
            The following countries are among those for which we provide
            migration services.
          </p>
        </div>
        <div className="CountryOfferCardContainer mt-10">
          {data.map((list) => {
            return <CountryOfferCard key={list.id} {...list} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default CountryWeOffer;

const data = [
  {
    id: 1,
    img: "https://conceptmigration.com/wp-content/uploads/2021/10/i-10.webp",
    title: "Uk migration",
    subTitle: "Discover new opportunities and a better life in UK.",
    to: "/service/uk",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/3474bb689a22dcc1c6b91a2a869ee055-2048x1152.jpg",
    title: "Canada migration",
    subTitle: "Unlock a word of possibilities with migration to the Canada.",
    to: "/service/canada",
  },
  {
    id: 4,
    img: "https://conceptmigration.com/wp-content/uploads/2021/10/Most-Wonderful-Places-in-Europe-1068x731-1.jpg",
    title: "Europe migration",
    subTitle: "Discover new opportunities and a better life in Europe.",
    to: "/service/europe",
  },
];
