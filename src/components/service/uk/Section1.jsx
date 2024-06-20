import React from "react";
import { useState } from "react";

import Container from "../../global/Container";
import DefaultButton from "../../global/DefaultButton";
import Form from "../Form";

const Section1 = () => {
  return (
    <div className="full py-10">
      <Container>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-between">
          {/* left */}
          <div className="w-[100%] md:w-[50%] flex   items-center">
            <div className="w-full text-left">
              <h3 className="section-small-heading-size underline primary-text-color font-[700] ">
                UK Immigration
              </h3>
              <p className="section-small-heading-size mt-3 primary-text-color font-[700]">
                All You Need To Know About UK Immigration
              </p>
              <p className="secondary-text-color content-font-size">
                Concept Migration Consultants is a leading UK immigration
                consultants in Dubai strongly committed to consistently
                providing world-class expert services within the areas of
                migration visas, overseas establishment, and resettlement.
                Concept Migration’s core service is processing visas to
                countries like the UK. Our goal is to successfully help
                immigrate our clients and their families to their desired
                country. We attempt to seek out ways to secure the long-term of
                our clients by guiding them to the proper path and processing
                their cases while minimizing the chance of rejection.
              </p>
              <p className="section-small-heading-size mt-3 primary-text-color font-[700]">
                Why Immigrate to the UK?
              </p>
              <p className="secondary-text-color content-font-size mb-5">
                In the year ending March 2020, formal study was the foremost
                reason for immigration (36%), while work was the second most
                typical reason (32%). Education was the main reason for
                immigration during the amount 2009-12, and therefore the
                reduction within the number of individuals migrating to the
                united kingdom to review since then reflects a reduction within
                the number of Tier 4 student visas issued to students from
                outside the EEA and Switzerland. In 2018, study once more became
                the foremost common reason for immigration to the United
                Kingdom, consistent with the estimates.
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
