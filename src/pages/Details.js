/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Nav, Frame } from "../components";

export const Details = () => {
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-[80%] overflow-auto">
        <div className="h-full sm:p-6 p-3 flex flex-col gap-6 max-w-[1000px]">
          <div>
            <div className="mb-1 text-lg font-ROM">
              WHEN AND WHERE IS THE WEDDING?
            </div>
            <div>
              The wedding will take place in the Catskills at{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.foxfiremountainhouse.com/"
                rel="noreferrer"
              >
                Foxfire Mountain House
              </a>{" "}
              located at 72 Andrew Lane, Mount Tremper, NY 12457 on November 7th
              - 9th 2025. Check in is at 4:00 pm on Friday November 7th and
              check out is 11:00 am Sunday November 9th.
            </div>
          </div>

          <div>
            <div className="font-ROM mb-1 text-lg">WHERE WILL I STAY?</div>
            <div>
              Foxfire (the venue) has enough accommodations for the majority of
              our guests and is where all the wedding activities will take
              place. One double-occupancy room will cost $700 for the weekend.
              This includes 2 nights stay, all food and beverage, and lots of
              quality time with friends and family. If you stay at the venue you
              also won't have to worry about transportation and getting around.
              Although, we don't recommend it for the majority of our guests, if
              you have a strong desire to stay off property please let us know
              as soon as possible! <br /> <b>Note: </b> Once we have a final
              headcount, we will give the venue our guest list and room
              assignments and they will send an invoice for the room personally
              to you. Meaning, if you RSVP that you are attending and plan to
              stay at the venue, you don't need to worry about anything else.
            </div>
          </div>

          <div>
            <div className="font-ROM mb-1 text-lg">HOW DO I CHECK-IN?</div>
            <div>
              On Friday, November 7th, when you arrive to check-in, please head
              inside the inn (big white building) and to the lobby where us and
              the staff at Foxfire will greet you and get you on your way.
            </div>
          </div>

          <div>
            <div className="mb-1 text-lg font-ROM">WHAT IS THE DRESS CODE?</div>
            <div>
              The dress code for the wedding day is semi-formal and other than
              that we want all of our guests to be as comfortable as possible.
              Keep in mind that this will be November in the Catskills and to
              please check the weather closer to the event. However, most, if
              not all, of the events will take place inside.
            </div>
          </div>

          <div>
            <div className="font-ROM mb-1 text-lg">CAN MY KIDS COME?</div>
            <div>
              As much as we love and adore all of our nieces and nephews,
              unfortunately, we will not be able to accommodate them during this
              weekend. We understand the complications with traveling and child
              care so please reach out to either of us, if necessary, to talk
              about this further.
            </div>
          </div>

          <div>
            <div className="font-ROM mb-1 text-lg">CAN I BRING A +1?</div>
            <div>
              Due to the intimate nature of this wedding and limited space
              available we ask that you please not bring anyone who wasn't
              explicitly invited.
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-1/4">
        <div className="bg-[#C8E2FD] w-full h-full"></div>
        <Nav />
      </div>
    </Frame>
  );
};
