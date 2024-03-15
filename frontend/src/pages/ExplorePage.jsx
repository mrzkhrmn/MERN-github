import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const ExplorePage = () => {
  return (
    <div className="bg-glass max-w-2xl mx-auto">
      <div className="p-6 flex flex-col items-center">
        {" "}
        <h1 className="text-lg font-semibold mb-4">
          Explore Popular Repositories
        </h1>
        <div className="flex items-center gap-2">
          <IoLogoJavascript size={60} className="text-yellow-300" />
          <SiTypescript size={55} className="text-blue-300" />
          <SiCplusplus size={60} className="text-blue-300" />
          <FaPython size={60} className="text-yellow-500" />
          <FaJava size={60} className="text-red-400" />
        </div>
      </div>
    </div>
  );
};
