import React from "react";
import { BasicNav } from "../components/Nav";
import hammock from "../images/hammock.jpeg";
import kk from "../images/kk.jpeg";

export const Schedule = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BasicNav />
      <div className="text-secondary sm:mt-[125px] mt-[75px] mb-12 sm:max-w-[900px] w-[85%] flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
        <div className="mb-6 flex flex-col">
          <div className="pb-1 font-bold text-black w-fit leading-4">
            Friday November 7
          </div>
          <div className="pl-4 mt-2 border-secondary border-l">
            <div>4:00 pm check in</div>
            <div>6:30 welcome party</div>
          </div>
          <div className="pb-1 mt-10 font-bold text-black w-fit leading-4">
            Saturday November 8
          </div>
          <div className="pl-4 mt-2 border-secondary border-l">
            <div>8:00 - 10:00 am breakfast</div>
            <div>4:00 - 11:00 pm wedding festivities</div>
          </div>
          <div className="pb-1 mt-10 font-bold text-black w-fit leading-4">
            Sunday November 9
          </div>
          <div className="pl-4 mt-2 border-secondary border-l">
            <div>8:00 - 10:00 am breakfast</div>
            <div>11:00 am check out</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2  ">
          <div className="bg-[#6B3E26] p-3 flex justify-center">
            <img src={hammock} alt="hammock" />
          </div>
          <div className="bg-[#6B3E26] p-3 flex justify-center">
            <img src={kk} alt="kk" />
          </div>
        </div>
      </div>
    </div>
  );
};
