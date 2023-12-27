import React from "react";
import profilePhoto from "../assets/images/1700917827763-removebg-preview.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center ">
      <div className="text-white max-w-[600px]">
        <h1 className="text-6xl p-2 m-2">I'm Vikash Rai</h1>
        <h2 className="text-3xl bg-green-500 p-2 m-2 font-bold max-w-max rounded-lg">
          Frontend Developer
        </h2>
        <p className="p-2 m-2 text-lg font-semibold">
          As a frontend engineer, I blend my enthusiasm for technology and a
          strong foundation in computer science to craft visually compelling and
          user-centric web experiences. With a passion for creative
          problem-solving.
        </p>
        <button
          className="m-2 p-2 bg-green-500 font-bold rounded-lg"
          onClick={() => navigate("/about")}
        >
          {"About Me >"}
        </button>
      </div>
      <div>
        <img
          className="w-[300px] h-[300px] rounded-lg shadow-lg shadow-green-600 m-2 "
          src={profilePhoto}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
