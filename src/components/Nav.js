import React, { useRef } from "react";
import { useNavigate, useMatch } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const NavV2 = ({ menuRef, subtitleRef, titleRef }) => {
  const navigate = useNavigate();
  return (
    <div className="sm:h-full sm:max-w-[1455px] max-h-2/3 flex justify-center gap-10 sm:gap-28 items-center w-full mb-4 p-4 text-[#4b3832]">
      <div
        className="text-[#4b3832] flex justify-center flex-col items-center gap-1"
        ref={menuRef}
      >
        <div onClick={() => navigate("/schedule")} className="cursor-pointer">
          Schedule
        </div>
        <div onClick={() => navigate("/details")} className="cursor-pointer">
          Details
        </div>
        <div onClick={() => navigate("/rsvp")} className="cursor-pointer">
          RSVP
        </div>
      </div>
      <div className="flex-col flex items-end justify-center">
        <div ref={titleRef} className="text-[#6B3E26] text-5xl">
          Kaleigh <br /> & Kevin
        </div>
        <div ref={subtitleRef} className="text-[#4b3832]">
          November 7-9 2025
        </div>
      </div>
    </div>
  );
};

export const BasicNav = () => {
  const navigate = useNavigate();
  const detailsActive = useMatch("details");
  const scheduleActive = useMatch("schedule");
  const rsvpActive = useMatch("rsvp");
  const navContainerRef = useRef();

  return (
    <div
      ref={navContainerRef}
      id="basic-nav-component"
      className="flex w-[90%] items-center fixed sm:justify-center justify-evenly sm:gap-28 gap-4 px-1 py-3 bg-accent"
    >
      <div className="flex text-secondary justify-center items-center gap-4">
        <div
          onClick={() => navigate("/schedule")}
          className={`${
            scheduleActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          Schedule
        </div>
        <div
          onClick={() => navigate("/details")}
          className={`${
            detailsActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          Details
        </div>

        <div
          onClick={() => navigate("/rsvp")}
          className={`${
            rsvpActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          RSVP
        </div>
      </div>
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex-col flex items-end justify-center"
      >
        <div className="leading-tight text-primary font-bold sm:text-2xl">
          Kaleigh & Kevin
        </div>
        {/* <div className="text-[#4b3832]">November 7-9 2025</div> */}
      </div>
    </div>
  );
};
