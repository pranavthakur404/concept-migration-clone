import React from "react";
import Container from "../global/Container";

const HeaderTopNotification = () => {
  return (
    <div className="w-full primary-bg-color py-4 hidden md:block">
      <Container>
        <ul className="grid grid-flow-col gap-3 content-font-size">
          <li className="text-white col-span-3">
            Location :{" "}
            <span className="text-[#AAAFB8]">
              Floor#14th, Office#1460, Tamani Arts Building, Business bay Dubai.
            </span>
          </li>
          <li className="text-white col-span-3">
            Email :{" "}
            <span className="text-[#AAAFB8]">Info@conceptmigration.com</span>
          </li>
          <li className="text-white col-span-3">
            Phone : <span className="text-[#AAAFB8]">+971 50 576 7171</span>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default HeaderTopNotification;
