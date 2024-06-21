import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Container from "../global/Container";

const FindOutSection = () => {
  return (
    <div className="w-full bg-[#F0F3F9] py-[50px]">
      <Container>
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Find Out Our
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Some of Our Success Stories
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <div className="w-full">
              {data.map((list) => {
                return (
                  <SwiperSlide key={list.id}>
                    <img src={list.image} alt="" />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default FindOutSection;

const data = [
  {
    id: 1,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 2,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 3,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 4,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 5,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 6,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 7,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
  {
    id: 8,
    image:
      "https://conceptmigration.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-3.42.19-AM-1.jpeg",
  },
];
