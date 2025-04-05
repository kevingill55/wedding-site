import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NavV2 } from "../components/Nav";
import chair from "../images/chair.jpg";
import fox from "../images/fox1.jpeg";

gsap.registerPlugin(useGSAP);

export const Home = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const picturesRef = useRef();
  const menuRef = useRef();
  const { state } = useLocation();
  const skipHomeAnimation = state?.skipHomeAnimation ?? false;

  const defaultTimeline = gsap.timeline({ defaults: { duration: 1.5 } });

  useGSAP(() => {
    if (!skipHomeAnimation) {
      defaultTimeline
        .set(titleRef.current, { opacity: 0 })
        .set(menuRef.current, { opacity: 0 })
        .set(picturesRef.current, { opacity: 0 })
        .set(subtitleRef.current, { opacity: 0 })
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            yPercent: 50,
            y: -window.innerHeight / 2,
            xPercent: 50,
            x:
              window.innerWidth > 1000
                ? -1000 / 2 + 48
                : -window.innerWidth / 2 + 48,
          },
          { opacity: 1 }
        )
        .to(titleRef.current, { y: 0, yPercent: 0 })
        .to(titleRef.current, { x: 0, xPercent: 0 })
        .to([subtitleRef.current, menuRef.current], { opacity: 1 })
        .to(picturesRef.current, { opacity: 1 });
    }
  });

  return (
    <div className="h-full w-full flex flex-col items-center sm:justify-start justify-between bg-[#FDF5C9]">
      <div
        ref={picturesRef}
        className="flex sm:max-w-[1000px] justify-center w-full flex-col sm:flex-row sm:gap-6 gap-1 sm:my-10 mt-6 sm:h-fit h-2/3"
      >
        <div className="flex justify-center w-full">
          <div className="bg-[#6B3E26] sm:p-3 p-2 w-fit sm:mb-0 mb-2">
            <img
              src={chair}
              alt="fire"
              className="sm:max-w-2xl sm:h-fit h-[220px]"
            />
          </div>
        </div>
        <div className="w-full justify-center flex">
          <div className="bg-[#6B3E26] w-fit sm:p-3 p-2">
            <img
              src={fox}
              alt="fox"
              className="sm:max-w-2xl sm:h-fit h-[220px]"
            />
          </div>
        </div>
      </div>
      <NavV2 menuRef={menuRef} subtitleRef={subtitleRef} titleRef={titleRef} />
    </div>
  );
};
