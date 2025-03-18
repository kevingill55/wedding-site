import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NavV2 } from "../components/Nav";
import fox from "../images/fox1.jpeg";
import fire from "../images/foxfire1.jpeg";

gsap.registerPlugin(useGSAP);

export const Home = () => {
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
      .to(titleRef.current, { x: 0 })
      .fromTo(pictureRef.current, { opacity: 0 }, { opacity: 1 });
  });

  useGSAP(() => {
    defaultTimeline2
      .fromTo(
        subtitleRef.current,
        { x: "80%", opacity: 0 },
        { x: 0, opacity: 1, delay: 2 }
      )
      .fromTo(pictureRef2.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return (
    <div className="h-full w-full flex flex-col items-center sm:justify-start justify-between bg-[#FDF5C9]">
      <div className="flex sm:max-w-[1000px] justify-center w-full flex-col sm:flex-row sm:gap-4 gap-2 sm:my-10 mt-8 h-2/3">
        <div className="flex justify-center w-full">
          <div ref={pictureRef} className="bg-[#6B3E26] p-3 w-fit sm:mb-0 mb-2">
            <img
              src={fire}
              alt="fire"
              className="sm:max-w-2xl sm:h-full h-[200px]"
            />
          </div>
        </div>
        <div className="w-full justify-center flex">
          <div ref={pictureRef2} className="bg-[#6B3E26] w-fit p-3">
            <img
              src={fox}
              alt="fox"
              className="sm:max-w-2xl sm:h-full h-[200px]"
            />
          </div>
        </div>
      </div>
      <NavV2 menuRef={menuRef} titleRef={titleRef} subtitleRef={subtitleRef} />
    </div>
  );
};
