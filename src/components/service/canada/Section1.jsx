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
                Canada Immigration
              </h3>
              <p className="section-big-heading-size primary-text-color font-[700]">
                Discovering Canada's Immigration Opportunities & Programs
              </p>
              <p className="secondary-text-color content-font-size">
                Looking for the best and most trusted immigration consultants
                for Canada in Dubai? Apex World Advisors is here to help you!
                Canada is the 2nd largest country in the world when it comes to
                the total area and the 4th largest in terms of the land area.
                The country also ranks high in terms of quality of life,
                education, economic freedom, civil liberties, and government
                transparency. These are some of the reasons why more and more
                people are now looking for opportunities to move to Canada to
                have a fruitful and balanced life.
              </p>
              <p className="secondary-text-color content-font-size my-5">
                With a significant requirement for skilled professionals and
                workers, the government of Canada has allowed immigration to
                fill in the vacant seats across the sectors where locals are
                unwilling or unable to meet the market demand. At present, the
                country is one of the topmost options for skilled workers who
                are interested in immigrating to countries with a high standard
                of living. With one of the highest per-capita immigration rates
                worldwide, the country is expected to welcome more new permanent
                residents when compared to the numbers of previous year. If this
                is something in which you are interested in, then ensure that
                you get professional assistance and guidance from the most
                reliable Canada immigration consultant in Dubai at Apex World
                Advisors to assure yourself of a hassle-free and smooth
                immigration experience!
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
