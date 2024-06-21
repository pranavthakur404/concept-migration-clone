import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

import Container from "../global/Container";

const Footer = () => {
  return (
    <div className="w-full primary-bg-color">
      <Container>
        <div className="w-full py-[50px] footer flex justify-between">
          <div className="w-[30%] footer-box">
            {/* <img
              src="https://conceptmigration.com/wp-content/uploads/2023/04/Concept-Migration-White-1536x436.png"
              className="w-[200px]"
              alt=""
            /> */}
            <p className="text-white content-font-size my-10">
              Welcome to our immigration company in Dubai, where we provide
              professional and personalized immigration services to help
              individuals and families.
            </p>

            <button className="px-7 py-3 rounded-tl-xl rounded-br-xl bg-white font-[500]">
              About Us
            </button>
          </div>
          <div className="w-[70%] footer-box  md:px-5">
            <p className="text-[20px] md:text-[24px] font-[700] text-center text-white">
              Concept Migration - Your Gateway to Global Opportunities
            </p>
            <div className="w-full flex footer-inner justify-between mt-5">
              <div className="w-[33%] footer-nav-box">
                <p className="text-[18px] font-[700] text-white mb-5">
                  Important Pages
                </p>
                <p className="text-[16px] text-white mt-3">About Us</p>
                <p className="text-[16px] text-white mt-3">Contact Us</p>
              </div>
              <div className="w-[33%] footer-nav-box">
                <p className="text-[18px] font-[700] text-white mb-5">
                  Countries
                </p>
                <p className="text-[16px] text-white mt-3">
                  Canada Immigration
                </p>
                <p className="text-[16px] text-white mt-3">USA Immigration</p>
                <p className="text-[16px] text-white mt-3">UK Immigration</p>
                <p className="text-[16px] text-white mt-3">
                  Australia Immigration
                </p>
                <p className="text-[16px] text-white mt-3">
                  Europe Immigration
                </p>
              </div>
              <div className="w-[33%] footer-nav-box">
                <p className="text-[18px] font-[700] text-white flex items-center gap-2 mb-5">
                  Get In Touch
                </p>
                <p className="text-[16px] text-white flex items-center gap-2 mt-3">
                  <IoIosCall /> +97456465161
                </p>
                <p className="text-[16px] text-white flex items-center gap-2 mt-3">
                  <IoIosCall /> +97456465161
                </p>
                <p className="text-[16px] text-white flex items-center gap-2 mt-3">
                  <FaEnvelope />
                  info@conceptmigration.com
                </p>
                <p className="text-[16px] text-white flex items-center gap-2 mt-3">
                  <FaHome className="text-[40px]" /> Floo#14th, Office#1460,
                  Tamani Arts Building, Business bay Dubai,
                </p>
              </div>
            </div>
            {/* social Icon */}
            <div className="flex justify-end text-white text-[25px] gap-3 my-5">
              <span>
                <FaFacebook />
              </span>
              <span>
                <RiInstagramFill />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>

            {/* companies logo */}
            <div className="w-full flex flex-wrap gap-5 md:gap-0 md:flex-nowrap justify-between mt-10">
              <img
                src="https://conceptmigration.com/wp-content/uploads/2021/10/1.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://conceptmigration.com/wp-content/uploads/2021/10/2.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://conceptmigration.com/wp-content/uploads/2021/10/3.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://conceptmigration.com/wp-content/uploads/2021/10/5.png"
                alt=""
                className="w-[100px]"
              />
              <img
                src="https://conceptmigration.com/wp-content/uploads/2021/10/6.png"
                alt=""
                className="w-[100px]"
              />
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="w-full flex flex-wrap  justify-between items-center py-5 text-white border-t border-gray-100 mt-5">
          <p className="content-font-size">
            © 2024 ALL RIGHT RESERVED | CONCEPT MIGRATION
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
