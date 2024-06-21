import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavigationLinks = () => {
  console.log(links);
  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className="py-8 flex items-center gap-1 relative mainMenu"
          >
            <NavLink
              to={link.to}
              className="content-font-size font-[500] primary-text-color "
            >
              {link.title}
            </NavLink>
            {link?.children && (
              <IoIosArrowDown className="primary-text-color" />
            )}
            {link?.children?.map((list) => {
              return (
                <div
                  key={list.id}
                  className="absolute bottom-[-40px] max-w-max shadow pr-10 z-[2] bg-white py-3 pl-2 childMenu"
                >
                  <p className="whitespace-nowrap primary-text-color content-font-size ">
                    <NavLink to={list.to}>{list.title}</NavLink>
                  </p>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;

const links = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "About Us",
    to: "/about",
    children: [
      {
        id: 0,
        title: "Approvals & Testimonials",
        to: "/approvals",
      },
    ],
  },
  {
    id: 3,
    title: "Canada",
    to: "/service/canada",
  },
  {
    id: 4,
    title: "UK",
    to: "/service/uk",
  },
  // {
  //   id: 5,
  //   title: "USA",
  //   to: "/",
  // },
  // {
  //   id: 6,
  //   title: "Europe",
  //   to: "/",
  // },
  // {
  //   id: 7,
  //   title: "Australia",
  //   to: "/",
  // },
  {
    id: 8,
    title: "Contact Us",
    to: "/contact-us",
  },
];
