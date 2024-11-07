/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Nav, Frame } from "../components";

export const Travel = () => {
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-3/4 overflow-auto">
        <div className="h-full pl-3 flex flex-col gap-6 max-w-[1000px]">
          <div>
            <div className="font-ROM">WHEN AND WHERE IS THE WEDDING?</div>
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
            <div className="font-ROM">WHERE WILL I STAY?</div>
            <div>
              Foxfire has enough accommodations for nearly all of our guests. In
              order for us to organize accordingly, please let us know if you
              plan to stay on or off property as soon as possible.
            </div>
          </div>

          <div>
            <div className="font-ROM">WHY WOULDN'T I STAY AT FOXFIRE?</div>
            <div>
              Foxfire is a quaint, gorgeous property but it might not be the
              perfect accommodations for everyone. Each room is double-occupancy
              only with no cots available. Additionally, the celebration takes
              place at the inn and if you only want to partake for a short
              period of time, you may prefer to stay someplace else. If you
              would like to stay off property, we can give you recommendations
              close by.
            </div>
          </div>

          <div>
            <div className="font-ROM">HOW MUCH WILL IT COST?</div>
            <div>
              One double-occupancy room at Foxfire will cost around $700 for the
              weekend. This includes 2 nights stay, all meals and lots of
              quality time with friends and family. If you plan to stay on
              property, you will not book directly through Foxfire. Once we get
              a final headcount, we'll send the confirmed guest list to Foxfire,
              and they will send you an invoice.
            </div>
          </div>

          <div>
            <div className="font-ROM">
              WHAT IS THE DRESS CODE AND WHAT DO I NEED TO BRING?
            </div>
            <div>
              The dress code for the wedding day is semi-formal and other than
              that we want all of our guests to be as comfortable as possible.
              Keep in mind that this will be November in the Catskills and to
              please check the weather closer to the event. Most, if not all, of
              the events will take place inside.
            </div>
          </div>

          <div>
            <div className="font-ROM">CAN MY KIDS COME?</div>
            <div>
              We love all of our nieces and nephews very much. Unfortunately,
              Foxfire can only accommodate a certain number of guests,
              particularly with regards to lodging and seated dinners. If you'd
              like a weekend without your kids and can arrange for child care,
              that's great, if not let's figure out the logistics together as we
              would also love to spend quality time with you and your kids.
            </div>
          </div>

          <div>
            <div className="font-ROM">CAN I BRING A +1?</div>
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

// import { AppBar } from "../components";

// export const Travel = () => {
//   return (
//     <div className="px-2 bg-[#E3C7BC] h-full overflow-auto">
//       <AppBar />
//       <div className="w-full flex justify-center">
//         <div className="py-4 flex flex-col gap-4 mt-2 mb-4 max-w-[1000px] border-y-alt border-dotted border-y-2 ">

//           <div className="flex flex-col px-2">
//             <div className="text-main">Can I bring my kids?</div>
//             <div>
// We love all of our nieces and nephews very much but unfortunately
// we will not be able to fit them at the inn. As it's not always
// possible to leave them behind, please let us know if you plan on
// bringing them with you to the Catskills and we'll work out the
// logistics together.
//             </div>
//           </div>

//           <div className="flex flex-col px-2">
//             <div className="text-main">Can I bring a +1?</div>
//             <div>
// Due to the intimate nature of this wedding and limited space
// available we ask that you please not bring anyone who wasn't
// explicitly invited.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
