import React, { useRef } from "react";
import { PropTypes } from "prop-types";
import fox from "../images/fox1.jpeg";
import fire from "../images/foxfire1.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavV2 } from "./Nav";

gsap.registerPlugin(useGSAP);

export const Frame = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const pictureRef = useRef();
  const pictureRef2 = useRef();
  const menuRef = useRef();

  const defaultTimeline = gsap.timeline({ defaults: { duration: 2 } });
  const defaultTimeline2 = gsap.timeline({ defaults: { duration: 2 } });

  useGSAP(() => {
    defaultTimeline
      .fromTo(titleRef.current, { opacity: 0, x: "-80%" }, { opacity: 1 })
      .to(titleRef.current, {
        x: 0,
        duration: 1,
      })
      .fromTo(
        pictureRef.current,
        { x: "-80%", opacity: 0 },
        { opacity: 1, x: 0, delay: 1 }
      );
  });

  useGSAP(() => {
    defaultTimeline2
      .fromTo(
        subtitleRef.current,
        { x: "80%", opacity: 0 },
        { x: 0, opacity: 1, delay: 2 }
      )
      .fromTo(
        pictureRef2.current,
        { x: "80%", opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo(menuRef.current, { opacity: 0 }, { opacity: 1 });
  });

  return (
    <div className="h-full w-full flex flex-col items-center sm:justify-start justify-between gap-4 bg-[#FDF5C9]">
      <div className="flex sm:max-w-[1000px] justify-center w-full flex-col sm:flex-row gap-4 sm:mt-12 mt-6">
        <div ref={pictureRef} className="bg-[#6B3E26] sm:p-3 p-3 mx-4">
          <img src={fire} alt="fire" className="sm:max-w-2xl" />
        </div>
        <div ref={pictureRef2} className="bg-[#6B3E26] sm:p-3 p-3 mx-4">
          <img src={fox} alt="fox" className="sm:max-w-2xl" />
        </div>
      </div>
      <NavV2 menuRef={menuRef} titleRef={titleRef} subtitleRef={subtitleRef} />
      {/* <div className="sm:max-w-[1455px] relative flex h-full justify-center gap-20 sm:gap-28 items-center w-full p-4 text-[#4b3832]">
        <div
          className="text-[#4b3832] flex justify-center flex-col items-center gap-1"
          ref={menuRef}
        >
          <div onClick={() => navigate("/details")} className="cursor-pointer">
            Details
          </div>
          <div onClick={() => navigate("/contact")} className="cursor-pointer">
            Contact
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
      </div> */}
    </div>
  );
};

Frame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
