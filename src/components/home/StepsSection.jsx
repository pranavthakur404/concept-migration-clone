import React from "react";

import Container from "../global/Container";
import StepsCard from "./StepsCard";

const StepsSection = () => {
  return (
    <div className="w-full py-[80px]">
      <Container>
        <div className="w-full text-center">
          <h3 className="section-small-heading-size underline primary-text-color font-[700]">
            The Steps of
          </h3>
          <p className="section-big-heading-size primary-text-color font-[700]">
            Immigration Process
          </p>
        </div>
        <div className="stepsSection mt-10">
          {data.map((list) => {
            return <StepsCard key={list.id} {...list} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default StepsSection;

const data = [
  {
    id: 1,
    step: "1",
    icon: "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-3.png",
    title: "Get Your Free Consultatioin",
    content: "Schedule your free consultation today and take the first step.",
  },
  {
    id: 2,
    step: "2",
    icon: "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-1.png",
    title: "Submit Required Documents",
    content: "Let us handle the paperwork - submit hour required documents",
  },
  {
    id: 3,
    step: "3",
    icon: "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/service-ico-2.png",
    title: "Wait For Visa Processing",
    content: "Wait for visa pocessing we keep you informed about the process.",
  },
  {
    id: 4,
    step: "4",
    icon: "https://themepanthers.com/wp/creote/v-new/wp-content/uploads/2021/10/process-icon-im-2.png",
    title: "Get Your Visa Approved",
    content: "Get your visa approved now and land to your new home.",
  },
];
