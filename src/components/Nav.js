/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { useNavigate, useMatch } from "react-router-dom";

export const NavV2 = ({ titleRef, subtitleRef, menuRef }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1000px] h-1/3 sm:h-2/3 flex items-end sm:justify-center w-full text-[#9F4A3C]">
      <div className="flex sm:gap-28 w-full gap-20 justify-end px-[48px] items-center py-4 sm:h-full">
        <div
          className="text-[#9F4A3C] flex justify-center flex-col items-center gap-1"
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
        <div className="flex-col flex items-end justify-end">
          <div
            ref={titleRef}
            className="text-primary font-temp sm:text-5xl text-4xl origin-bottom-right"
          >
            Kaleigh <br /> & Kevin
          </div>
          <div ref={subtitleRef} className="text-[#9F4A3C]">
            November 7-9 2025
          </div>
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

  const onNavigate = useCallback(
    async (path) => {
      navigate(path);
    },
    [navigate]
  );
  return (
    <div className="flex w-full shadow-sm items-center fixed sm:justify-center justify-evenly sm:gap-28 gap-4 px-1 py-2 bg-accent">
      <div className="flex text-primary justify-center items-center gap-4">
        <div
          onClick={async () => {
            onNavigate("/schedule");
          }}
          className={`${
            scheduleActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          Schedule
        </div>
        <div
          onClick={() => {
            onNavigate("/details");
          }}
          className={`${
            detailsActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          Details
        </div>

        <div
          onClick={() => {
            onNavigate("/rsvp");
          }}
          className={`${
            rsvpActive && `underline`
          } sm:text-base text-sm cursor-pointer`}
        >
          RSVP
        </div>
      </div>
      <div
        onClick={() => navigate("/", { state: { skipHomeAnimation: true } })}
        className="cursor-pointer flex-col flex items-end justify-center"
      >
        <div className="bg-blue-100 rounded-lg py-2 px-3 hover:bg-blue-200 leading-tight text-primary font-temp sm:text-2xl">
          Kaleigh & Kevin
        </div>
      </div>
    </div>
  );
};
