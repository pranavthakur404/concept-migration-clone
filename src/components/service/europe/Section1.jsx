import React from "react";

import Container from "../../global/Container";
import Form from "../Form";
import DefaultButton from "../../global/DefaultButton";

const Section1 = () => {
  return (
    <div className="full py-10">
      <Container>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-between">
          {/* left */}
          <div className="w-[100%] md:w-[50%] flex   items-center">
            <div className="w-full text-left">
              <h3 className="section-small-heading-size underline primary-text-color font-[700] ">
                migration to Europe
              </h3>
              <p className="section-small-heading-size primary-text-color font-[700] mt-5">
                Get the Latest Information for Europe's migration : Everything
                You Need to Know
              </p>
              <p className="secondary-text-color content-font-size">
                Europe is in great need of immigrants to continue the excellent
                economic growth the country has experienced over the past few
                years. To keep up with the trend the Europe keeps increasing
                migration targets to numbers over 400,000 every year. Europe
                has developed a highly diverse and flexible list of European
                migration Programs. Providence Migration offers a complete
                suite of migration services for Europe.
              </p>

              <p className="section-small-heading-size primary-text-color font-[700] mt-5">
                We will ensure that your application receives impeccable
                attention to detail
              </p>

              <u className="primary-text-color no-underline	">
                <li>High quality legal representation</li>
                <li>Transparent and efficient service</li>
                <li>Experienced professionals</li>
                <li>Member of the Quebec Bar Association</li>
                <li>Legally authorized representatives</li>
                <li>Competitive prices</li>
              </u>

              <p className="section-small-heading-size primary-text-color font-[700] mt-5">
                Why Europe?
              </p>
              <p className="secondary-text-color content-font-size mb-5">
                Europe offers a wealth of opportunities for seasonal workers,
                with diverse job opportunities, rich cultural experiences, and
                strong legal protections. The region is generally safe and
                stable, and its international connections and business networks
                can be valuable for building professional connections and
                advancing careers.
              </p>
              <DefaultButton text={"Contact Us"} />
            </div>
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%]">
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section1;
