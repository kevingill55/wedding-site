import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NavV2 } from "../components/Nav";
import hammock from "../images/hammock.jpeg";
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
        .to([subtitleRef.current, picturesRef.current, menuRef.current], {
          opacity: 1,
        });
    }
  });

  return (
    <div className="w-full h-full flex flex-col items-center sm:justify-start justify-between bg-accent">
      <div
        className="flex-col sm:pt-20 sm:gap-8 gap-2 sm:flex-row flex"
        ref={picturesRef}
      >
        <div className="border-primary border-2 p-2 sm:p-4 bg-blue-200 w-fit">
          <img
            src={fox}
            alt="fire"
            className="sm:max-w-xl sm:h-[355px] h-[210px]"
          />
        </div>
        <div className="border-primary border-2 p-2 sm:p-4 bg-blue-200 w-fit flex justify-center">
          <img
            src={hammock}
            alt="hammock"
            className="sm:max-w-xl sm:h-[355px] h-[210px]"
          />
        </div>
      </div>
      <NavV2 menuRef={menuRef} subtitleRef={subtitleRef} titleRef={titleRef} />
    </div>
  );
};
