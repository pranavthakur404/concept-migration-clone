import React, { useState } from "react";
import { FaHandHoldingWater } from "react-icons/fa";
import { BsFillFileZipFill } from "react-icons/bs";

import Container from "../global/Container";
import DefaultButton from "../global/DefaultButton";

const Section2 = () => {
  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(true);
  return (
    <Container>
      <div className="w-full py-[80px] flex flex-wrap md:flex-nowrap">
        <div className="w-[100%] mt-5 md:mt-0 md:w-[50%] relative">
          <img
            src="https://conceptmigration.com/wp-content/uploads/2023/04/ims-flexibility.jpg"
            className="w-[100%] sm:w-[70%] md:w-[70%] rounded-lg my-0 mx-auto"
            alt=""
          />

          <img
            src="https://conceptmigration.com/wp-content/uploads/2023/04/53fb47542d.jpg"
            className="h-[30%] rounded-lg my-0 mx-auto absolute right-[5%] bottom-[25%] border-4 border-white shadow-2xl"
            alt=""
          />

          {/* content */}
          <div className="flex gap-3 items-center my-5 cursor-pointer w-[80%] sm:w-[60%] bg-white shadow px-2 py-5 absolute bottom-[-50px] sm:bottom-[150px] rounded-lg left-[12%] sm:left-[20%] ">
            {/* icon */}
            <div>
              <span className="w-[55px] h-[55px] border border-dashed text-white  rounded-full primary-bg-color flex justify-center items-center cursor-pointer">
                <span className="text-[25px]  font-[500]">05</span>
              </span>
            </div>

            {/* text */}
            <div>
              <h3 className="section-small-heading-size primary-text-color font-[500]">
                Year Of Experience We Jus Achieved
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Concept Migration
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Discover About Us
          </p>
          <p className="secondary-text-color content-font-size">
            As immigration consultants, we are committed to helping individuals
            and families achieve their dreams of living and working abroad. Our
            team of experienced professionals provides personalized guidance and
            support throughout the immigration process.
          </p>

          <div
            className="flex gap-3 items-center my-5 cursor-pointer"
            onMouseEnter={() => {
              setIcon1(false);
            }}
            onMouseLeave={() => {
              setIcon1(true);
            }}
          >
            {/* icon */}
            <div>
              <span
                className={`${
                  icon1 ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                }  text-white text-[25px] rounded-full primary-bg-color transform duration-500 flex justify-center items-center cursor-pointer`}
              >
                {icon1 ? (
                  <FaHandHoldingWater />
                ) : (
                  <span className="text-[14px] font-[500]">01</span>
                )}
              </span>
            </div>

            {/* text */}
            <div>
              <h3 className="section-small-heading-size underline primary-text-color font-[700]">
                Convenience
              </h3>
              <p className="secondary-text-color content-font-size">
                Our services are designed to provide a hassle-free experience
                for our clients, with flexible scheduling.
              </p>
            </div>
          </div>

          <div
            className="flex gap-3 items-center  cursor-pointer mb-10"
            onMouseEnter={() => {
              setIcon2(false);
            }}
            onMouseLeave={() => {
              setIcon2(true);
            }}
          >
            {/* icon */}
            <div>
              <span
                className={`${
                  icon2 ? "w-[55px] h-[55px]" : "w-[45px] h-[45px]"
                }  text-white text-[25px] rounded-full primary-bg-color transform duration-500 flex justify-center items-center cursor-pointer`}
              >
                {icon2 ? (
                  <BsFillFileZipFill />
                ) : (
                  <span className="text-[14px] font-[500]">02</span>
                )}
              </span>
            </div>

            {/* text */}
            <div>
              <h3 className="section-small-heading-size underline primary-text-color font-[700]">
                Competitive Pricing
              </h3>
              <p className="secondary-text-color content-font-size">
                We offer competitive pricing for our services, ensuring that our
                clients receive the best value for their investment.
              </p>
            </div>
          </div>
          <DefaultButton text={"Apply Now"} />
        </div>
      </div>
    </Container>
  );
};

export default Section2;
