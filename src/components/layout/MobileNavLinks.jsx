import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MobileNavLinks = ({ setIsNav }) => {
  return (
    <ul className="mt-5">
      {links.map((link) => {
        return (
          <li key={link.id} className="py-2 mobileMainMenu relative pr-1">
            <NavLink
              to={link.to}
              className="content-font-size font-[700] primary-text-color"
              onClick={() => {
                setIsNav(false);
              }}
            >
              {link.title}
            </NavLink>
            {link?.children && (
              <FaChevronDown className="primary-text-color absolute right-0 top-3  block" />
            )}
            {link?.children?.map((list) => {
              return (
                <div
                  key={list.id}
                  className="w-full shadow pr-10 z-[2] bg-white py-3 pl-2 mobileChildMenu"
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

export default MobileNavLinks;

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
