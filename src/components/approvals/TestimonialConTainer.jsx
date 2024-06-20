import React from "react";

import Container from "../global/Container";

const TestimonialConTainer = () => {
  return (
    <Container>
      <div class="w-full testimonialContainer">
        {data.map((list) => {
          return (
            <img
              key={list.id}
              src={list.img}
              className="w-full border-2 border-gray-300"
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TestimonialConTainer;

const data = [
  {
    id: 1,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 2,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 3,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 4,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 5,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 6,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 7,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 8,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 9,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 10,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
  {
    id: 11,
    img: "https://conceptmigration.com/wp-content/uploads/2024/03/601493a4-eb0e-410d-a475-da6ea3ba0dfe.jpg",
  },
];
