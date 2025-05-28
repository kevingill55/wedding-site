import React from "react";
import { BasicNav } from "../components/Nav";
// import hammock from "../images/hammock.jpeg";
// import kk from "../images/kk.jpeg";

export const Schedule = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BasicNav />
      <div className="text-primary sm:mt-[125px] mt-[75px] mb-12 sm:max-w-[900px] w-[85%] flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
        <div className="mb-6 flex flex-col">
          <div className="pb-1 font-temp w-fit leading-4">
            Friday • November 7
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <div>4:00 PM — check-in</div>
            <div>6:00 PM — welcome dinner</div>
          </div>
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Saturday • November 8
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <div>8:00-10:00 AM — breakfast</div>
            <div>12:00-1:30 PM — lunch</div>
            <div>4:30 PM — ceremony & reception</div>
          </div>
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Sunday • November 9
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <div>8:00-10:00 AM — breakfast</div>
            <div>11:00 AM — checkout</div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 sm:w-1/2  ">
          <div className="bg-primary p-3 flex justify-center">
            <img src={hammock} alt="hammock" />
          </div>
          <div className="bg-primary p-3 flex justify-center">
            <img src={kk} alt="kk" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
