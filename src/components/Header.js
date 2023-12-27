import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white flex  justify-between p-5">
      <div>
        <span>Vikash Rai</span>
      </div>
      <div>
        <ul className="flex gap-10 text-lg">
          <Link to={"/home"}>
            <li className="hover:cursor-pointer hover:shadow-sm hover:shadow-green-500">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:cursor-pointer hover:shadow-sm hover:shadow-green-500">
              Experience
            </li>
          </Link>
          <Link to={"/projects"}>
            <li className="hover:cursor-pointer hover:shadow-sm hover:shadow-green-500">
              Projects
            </li>
          </Link>
          <Link to={"/technologies"}>
            <li className="hover:cursor-pointer hover:shadow-sm hover:shadow-green-500">
              Technologies
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:cursor-pointer hover:shadow-sm hover:shadow-green-500">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
