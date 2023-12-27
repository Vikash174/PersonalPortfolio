import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className=" flex items-center align-middle w-[90vw] h-[90vh] justify-center">
      <div className="fixed left-0">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
