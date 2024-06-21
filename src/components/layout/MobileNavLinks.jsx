import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavLinks = ({ setIsNav }) => {
  return (
    <ul className="mt-5">
      {links.map((link) => {
        return (
          <li key={link.id} className="py-2 ">
            <NavLink
              to={link.to}
              className="content-font-size font-[700] primary-text-color"
              onClick={() => {
                setIsNav(false);
              }}
            >
              {link.title}
            </NavLink>
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
  },
  {
    id: 6,
    title: "Approvals & Testimonials",
    to: "/approvals",
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
