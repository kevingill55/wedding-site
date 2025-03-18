/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BasicNav } from "../components/Nav";

export const Details = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <BasicNav />
      <div className="text-secondary sm:mt-[125px] mt-[75px] sm:max-w-[750px] w-[85%] mb-12 flex flex-col">
        <div className="pb-1 font-bold  w-fit leading-4 text-black">
          When and where is the wedding?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          The wedding will take place in the Catskills at{" "}
          <a
            className="underline text-blue-700"
            target="_blank"
            href="https://www.foxfiremountainhouse.com/"
            rel="noreferrer"
          >
            Foxfire Mountain House
          </a>{" "}
          located at 72 Andrew Lane, Mount Tremper, NY 12457 on November 7th -
          9th 2025. Check in is at 4:00 pm on Friday November 7th and check out
          is 11:00 am Sunday November 9th.
        </div>
        <div className="w-fit leading-4 text-black font-bold mt-10 pb-1">
          Where will I stay?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          Foxfire (the venue) has enough accommodations for the majority of our
          guests and is where all the wedding activities will take place. One
          double-occupancy room will cost $700 for the weekend. This includes 2
          nights stay, all food and beverage, and lots of quality time with
          friends and family. If you stay at the venue you also won't have to
          worry about transportation and getting around. If you have a strong
          desire to stay off property please let us know as soon as possible!{" "}
          <br /> <br />
          Once we have a final headcount, we will give the venue our guest list
          and room assignments and they will send an invoice for the room
          personally to you. So, if you RSVP that you are attending and plan to
          stay at the venue, you don't need to worry about booking anything.
        </div>
        <div className="w-fit leading-4 text-black font-bold mt-10 pb-1">
          How do I check in?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          On Friday, November 7th, when you arrive to check in, please head
          inside the inn (big white building) and to the lobby where us and the
          staff at Foxfire will show you around and direct you to your room.
        </div>
        <div className="w-fit leading-4 text-black font-bold mt-10 pb-1">
          What is the dress code?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          The dress code for the wedding day is semi-formal and other than that
          we want all of our guests to be as comfortable as possible. Keep in
          mind that this will be November in the Catskills and to please check
          the weather closer to the event. However, most, if not all, of the
          events will take place inside.
        </div>
        <div className="w-fit leading-4 text-black mt-10 font-bold pb-1">
          Can my kids come?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          As much as we love and adore all of our nieces and nephews,
          unfortunately, we will not be able to accommodate them during this
          weekend. We understand the complications with traveling and child care
          so please reach out to either of us, if necessary, to talk about this
          further.
        </div>
        <div className=" w-fit leading-4 text-black mt-10 font-bold pb-1">
          Can I bring a +1?
        </div>
        <div className="pl-4 mt-2 border-secondary border-l">
          Due to the intimate nature of this wedding and limited space available
          we ask that you please not bring anyone who wasn't explicitly invited.
        </div>
      </div>
    </div>
  );
};
