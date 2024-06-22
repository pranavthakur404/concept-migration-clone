import React from "react";
import DefaultButton from "../global/DefaultButton";

import Container from "../global/Container";

const Section2 = () => {
  return (
    <div className="w-full bg-[#F0F3F9] py-[50px]">
      <Container>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-evenly gap-5 ">
          <div className="w-[100%] md:w-[50%]">
            <h3 className="section-small-heading-size underline primary-text-color font-[700]">
              We are
            </h3>
            <p className="section-big-heading-size primary-text-color font-[700]">
              Leaders in Our Field
            </p>
            <p className="secondary-text-color content-font-size my-3">
              Apex World Advisors is a leading migration consultancy firm,
              providing expert guidance and support to individuals and families
              looking to migration to Dubai and other countries. With a team of
              experienced professionals, we specialize in visa application
              assistance, document preparation, and migration consultation
              services. Our goal is to make the migration process simple and
              stress-free for our clients. At Apex World Advisors, we understand
              that migration can be a complex and overwhelming process, which is
              why we offer a comprehensive range of services to meet the diverse
              needs of our clients.
            </p>

            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-5">
              <div className="w-[100%] sm:w-[48%] flex gap-5 items-center border-t-4 border-[#0f1d4a] py-5">
                <img
                  src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-1.png"
                  alt=""
                />
                <p className="text-[18px] font-[700] primary-text-color font-[700">
                  Tailored Advice & Support
                </p>
              </div>
              <div className="w-[100%] sm:w-[48%] flex gap-5 items-center border-t-4 border-[#0f1d4a] py-5">
                <img
                  src="https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/icon-img-n-2.png"
                  alt=""
                />
                <p className="text-[18px] font-[700] primary-text-color font-[700">
                  Flexible Company Policies
                </p>
              </div>
            </div>

            <DefaultButton text={"Contact Us"} />
          </div>

          <div className="w-[100%] md:w-[50%] relative grid">
            <img
              src="https://conceptmigration.com/wp-content/uploads/2023/04/3-6-1.jpg"
              className="rounded-lg my-0 mx-auto w-[70%] "
              alt=""
            />

            <div className="flex my-0 mx-auto mt-3 gap-2 w-[70%]">
              <img
                src="https://conceptmigration.com/wp-content/uploads/2023/04/1572434610_aaaaa.jpg"
                className="w-[50%] rounded-lg my-0 mx-auto"
                alt=""
              />
              <img
                src="https://conceptmigration.com/wp-content/uploads/2023/04/MENEDZHMENT_2x.png"
                className=" w-[50%] rounded-lg my-0 mx-auto"
                alt=""
              />
            </div>

            {/* content */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
