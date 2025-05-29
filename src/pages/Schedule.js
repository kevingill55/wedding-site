import React from "react";
import { BasicNav } from "../components/Nav";
import fox4 from "../images/fox4.jpeg";

export const Schedule = () => {
  return (
    <div className="w-full flex flex-col h-full items-center">
      <BasicNav />
      <div className="h-full text-primary sm:mt-[145px] mt-[75px] mb-12 sm:max-w-[900px] w-[85%] flex flex-col sm:flex-row sm:gap-16 items-center sm:items-start justify-between sm:justify-center">
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
        <div>
          <div className="border-primary border-2 p-2 sm:p-4 bg-blue-200 w-fit">
            <img
              src={fox4}
              alt="fire4"
              className="sm:max-w-xl sm:h-[350px] h-[215px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
