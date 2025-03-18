import React from "react";
import { NavV2 } from "../components/Nav";
export const Landing = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* <div className="flex sm:max-w-[1000px] justify-center w-full flex-col sm:flex-row gap-4 sm:my-12 mt-6">
        <div className="flex justify-center w-full h-full">
          <div className="bg-[#6B3E26] p-3 w-fit sm:mb-0 mb-2">
            <img
              src={fire}
              alt="fire"
              className="sm:max-w-2xl sm:h-full h-[200px]"
            />
          </div>
        </div>
        <div className="w-full justify-center flex">
          <div className="bg-[#6B3E26] w-fit p-3">
            <img
              src={fox}
              alt="fox"
              className="sm:max-w-2xl sm:h-full h-[200px]"
            />
          </div>
        </div>
      </div> */}
      <NavV2 />
    </div>
  );
};
