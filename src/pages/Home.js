import React from "react";
import { Frame, Nav } from "../components";

export const Home = () => {
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-2/5">
        <div className="h-full text-end flex justify-end items-end pr-3">
          AN INTIMATE WEDDING IN UPSTATE NEW YORK
        </div>
      </div>
      <div className="flex h-3/5">
        <div className="bg-[#C8E2FD] overflow-hidden w-full h-full"></div>
        <Nav />
      </div>
    </Frame>
  );
};
