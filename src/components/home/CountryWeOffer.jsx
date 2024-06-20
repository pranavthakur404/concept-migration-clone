import React from "react";

import Container from "../global/Container";
import CountryOfferCard from "./CountryOfferCard";

const CountryWeOffer = () => {
  return (
    <div className="w-full bg-[#F0F3F9] py-10">
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
            immigration services.
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
    title: "Uk Immigration",
    subTitle: "Discover new opportunities and a better life in UK.",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2023/04/3474bb689a22dcc1c6b91a2a869ee055-2048x1152.jpg",
    title: "Canada Immigration",
    subTitle: "Unlock a word of possibilities with immigration to the Canada.",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2021/10/New-York-City-USA-Manhattan-Queensboro-Bridge-buildings-lights_1920x1200.jpg",
    title: "USA Immigration",
    subTitle: "Make your American Dream a reality with our migration services",
  },
  {
    id: 4,
    img: "https://conceptmigration.com/wp-content/uploads/2021/10/Most-Wonderful-Places-in-Europe-1068x731-1.jpg",
    title: "Uk Immigration",
    subTitle: "Discover new opportunities and a better life in UK.",
  },
];
