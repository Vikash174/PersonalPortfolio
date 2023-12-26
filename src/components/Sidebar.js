import React from "react";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import LeetCodeIcon from "../assets/icons/code-solid.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import {
  GITHUB_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../utils/constant";

const Sidebar = () => {
  return (
    <div className="fixed top-[35%] left-0 ">
      <ul className="text-white">
        <li className="bg-green-500 hover:cursor-pointer ">
          <a href={LINKEDIN_URL}>
            <img
              className="p-2 hover:scale-75 transition-transform duration-300"
              src={LinkedInIcon}
              alt="linked icon"
            />
          </a>
        </li>
        <li className="bg-green-500 hover:cursor-pointer">
          <a href={GITHUB_URL}>
            <img
              className="p-2 hover:scale-75 transition-transform duration-300"
              src={GithubIcon}
              alt="linked icon"
            />
          </a>
        </li>
        <li className="bg-green-500 hover:cursor-pointer">
          <a href={LEETCODE_URL}>
            <img
              className="p-2 hover:scale-75 transition-transform duration-300"
              src={LeetCodeIcon}
              alt="linked icon"
            />
          </a>
        </li>
        <li className="bg-green-500 hover:cursor-pointer">
          <a href={TWITTER_URL}>
            <img
              className="p-2 hover:scale-75 transition-transform duration-300"
              src={TwitterIcon}
              alt="linked icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
