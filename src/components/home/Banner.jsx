import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import DefaultButton from "../global/DefaultButton";

import Container from "../global/Container";

const Banner = () => {
  const handleClick = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
    console.log("working");
  };

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {data.map((list) => {
        return (
          <SwiperSlide key={list.id}>
            <div
              className="w-full h-[60vh] sm:h-[85vh] md:h-[100vh] flex items-center justify-start"
              style={{
                background: `url(${list.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <div className="content py-5 mx-10 w-[80%] md:w-[60%]">
                  <button
                    type="button"
                    className="bg-[#ffffff1a]  border-[#125476] border-2 text-white px-5 py-3 rounded-br-xl section-big-heading-size rounded-tl-xl
      font-[500] section-small-heading-size mb-5"
                  >
                    {list.heading}
                  </button>
                  <p className="banner-font-size font-[500] mb-5  text-white">
                    {list.title}
                  </p>
                  <p className="section-small-heading-size mb-5 text-[#AAAFB8]">
                    {list.content}
                  </p>
                  <div onClick={handleClick}>
                    <DefaultButton text={"Know more"} />
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;

const data = [
  {
    id: 1,
    heading: "Our Vision to Grow Better",
    title: "Guide To Seamless, Immigration",
    content:
      " Our team of trusted immigration consultants is equipped to handle your case, and our registered agents will provide professional assistance  throughout your visa application process.",
    buttonText: "Pay Online",
    link: "/",
    image:
      "https://conceptmigration.com/wp-content/uploads/2022/01/banner-replace-1-1-e1681815047172.jpg",
  },
  {
    id: 2,
    heading: "Our Vision to Grow Better",
    title: "Guide To Seamless, Immigration",
    content:
      " Our team of trusted immigration consultants is equipped to handle your case, and our registered agents will provide professional assistance  throughout your visa application process.",
    buttonText: "Pay Online",
    link: "/",
    image:
      "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2022/01/banner-replace-3-1.jpg",
  },
];
