import React from "react";
import { MdOutlineArchitecture } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";

import Container from "../global/Container";

const OurBusiness = () => {
  return (
    <div className="w-full py-[50px]">
      <Container>
        <div className="w-[100%] text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            Our Business
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Stand Out From The Rest
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between mt-10">
          <div className="w-[100%] md:w-[32%]">
            <img
              src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-ab-1.jpg"
              alt=""
              className="rounded-lg shadow-xl w-full"
            />
            {/* card */}
            <div className="text-center p-5 py-10 mt-3 shadow-xl">
              <MdOutlineArchitecture className="primary-text-color text-[35px] my-0 mx-auto" />
              <p className="section-small-heading-size primary-text-color font-[700] my-3">
                Our Mission
              </p>
              <p className="content-font-size secondary-text-color">
                Our mission at Concept Migration is to provide reliable and
                personalized immigration services.
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[32%] text-center px-5 py-10 mt-3 shadow-xl">
            <FaArrowsAlt
              className="primary-text-color text-[35px] my-0
            mx-auto"
            />
            <p className="section-small-heading-size primary-text-color font-[700] my-3">
              Our Mission
            </p>
            <p className="content-font-size secondary-text-color">
              Our mission at Concept Migration is to provide reliable and
              personalized immigration services.
            </p>
            <ul className="text-left mt-5 list-disc ml-5 secondary-text-color leading-7">
              <li>Respect for diversity</li>
              <li>Customer satisfaction</li>
              <li>Ethical conduct and accountablity</li>
              <li>Continous Learning</li>
              <li>Confidentiality</li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[32%]">
            {/* card */}
            <div className="text-center p-5 py-10 shadow-xl">
              <MdOutlineArchitecture className="primary-text-color text-[35px] my-0 mx-auto" />
              <p className="section-small-heading-size primary-text-color font-[700] my-3">
                Our Vision
              </p>
              <p className="content-font-size secondary-text-color">
                At Concept Migration, our vision is to become a leading
                immigration consultancy.
              </p>
            </div>
            <img
              src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-ab-2.jpg"
              alt=""
              className="rounded-lg mt-3 shadow-xl w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurBusiness;
