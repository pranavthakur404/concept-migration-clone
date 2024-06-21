import React, { useState } from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const WhySection = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div
      className="w-full h-[100vh] flex items-center justify-center mb-10 sm:mb-0"
      style={{
        background:
          "url(https://conceptmigration.com/wp-content/uploads/2021/10/tab-sec-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content section */}
      <div
        className="[95%] sm-[90%] md:w-[85%] about-bottom-sec relative py-10 rounded-[25px]"
        style={{
          background:
            "url(https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/tab-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-wrap md:flex-wrap justify-between relative z-[2]">
          <div className="w-[100%] sm:w-[25%] relative">
            <div className="w-[98%]  sm:absolute top-[-80px] left-[20px] rounded-2xl bg-white">
              <div className="w-full px-5 py-5">
                <div
                  className="py-2 cursor-pointer font-[700] primary-text-color border-b border-[#125476]"
                  onClick={() => {
                    setTabs(0);
                  }}
                >
                  01. Affordable
                </div>
                <div
                  className="py-3 cursor-pointer font-[700] primary-text-color border-b border-[#125476]"
                  onClick={() => {
                    setTabs(1);
                  }}
                >
                  02. Knowledge
                </div>
                <div
                  className="py-3 cursor-pointer font-[700] primary-text-color border-b border-[#125476]"
                  onClick={() => {
                    setTabs(2);
                  }}
                >
                  03. Save Times
                </div>
                <div
                  className="py-3 cursor-pointer font-[700] primary-text-color border-b border-[#125476]"
                  onClick={() => {
                    setTabs(3);
                  }}
                >
                  04. Years of Experience
                </div>
                <div
                  className="pt-3 cursor-pointer font-[700] primary-text-color "
                  onClick={() => {
                    setTabs(4);
                  }}
                >
                  05. Customized Solutions
                </div>
              </div>

              <div className="py-3 font-[700] cursor-pointer text-white text-center mx-1 rounded-lg primary-bg-color ">
                Call For Free Consultation
              </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[70%] py-10 px-5">
            <h3 className="section-small-heading-size underline text-white font-[700]">
              Why Apex World Advisors
            </h3>
            <p className="section-big-heading-size text-white font-[700]">
              {tabsData[tabs].middle}
            </p>
            <p className="text-white content-font-size my-3">
              {tabsData[tabs].bottom}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;

const tabsData = [
  {
    middle: "Affordable & Flexible",
    bottom:
      "We understand that the cost of immigration services can be a burden on your finances. To make our services even more affordable, we offer flexible payment plans to help you spread out the cost of our services over time. This way, you can receive the support you need without breaking the bank.",
  },
  {
    middle: "Up-to-date knowledge",
    bottom:
      "Immigration laws and regulations are constantly changing, which can make the process confusing and overwhelming. Our team of experts stays up-to-date with the latest changes in immigration laws and regulations, so you can trust us to provide accurate and reliable information.",
  },
  {
    middle: "Time Saving Solutions:",
    bottom:
      "We understand that the immigration process can be time-consuming and stressful, especially if you're not familiar with the requirements and procedures. Our team can save you time and hassle by providing efficient solutions and handling the paperwork on your behalf.",
  },
  {
    middle: "Customized Solutions",
    bottom:
      "We understand that every client is unique, with their own set of circumstances and goals. That's why we take a personalized approach to every case, tailoring our services to meet your specific needs.",
  },
  {
    middle: "Customized Solutions",
    bottom:
      "We understand that every client is unique, with their own set of circumstances and goals. That's why we take a personalized approach to every case, tailoring our services to meet your specific needs.",
  },
];
