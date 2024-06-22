import React from "react";

import Container from "../global/Container";

const ChooseUsSection = () => {
  return (
    <Container>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between my-[50px]">
        {/* left */}
        <div className="w-[100%] md:w-[50%]">
          <img
            src="https://conceptmigration.com/wp-content/uploads/2023/04/ims-flexibility.jpg"
            alt=""
            className="w-[100%] md:w-[85%]  rounded-3xl"
          />
        </div>
        {/* right */}
        <div className="w-[100%] md:w-[50%] flex mt-[30px] md:mt-0 items-center">
          <div className="w-full text-left">
            <h3 className="section-small-heading-size underline primary-text-color font-[700]">
              Why Choose Us
            </h3>
            <p className="section-big-heading-size primary-text-color font-[700]">
              Top Reasons to Choose Us
            </p>
            <p className="secondary-text-color content-font-size">
              Immigrating to a new country can be a complex and daunting
              process, with various legal requirements and regulations to
              navigate. At such a time, having the assistance of experienced
              migration consultants can make a world of difference and make your
              migration process easy & fast.
            </p>
            <div className="my-5">
              <p className="text-[18px] primary-text-color font-[700]">
                Professionally handled by migration Consultant.
              </p>
              <p className="secondary-text-color content-font-size">
                Your case is professionally handled by a Regulated migration
                Consultant from start to finish.
              </p>
            </div>

            <div className="my-5">
              <p className="text-[18px] primary-text-color font-[700]">
                A range of Visa services that suit your requirements.
              </p>
              <p className="secondary-text-color content-font-size">
                We offer a range of services whether your are looking for
                Student Visa, Residency or Investment options to secure your
                future.
              </p>
            </div>

            <div className="my-5">
              <p className="text-[18px] primary-text-color font-[700]">
                Our Secret to success is Transparency.
              </p>
              <p className="secondary-text-color content-font-size">
                Keeping transparency factor in mind we share all login details
                and provide constant updates on case status to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChooseUsSection;
