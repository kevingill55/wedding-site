import { Nav, Frame } from "../components";

export const RSVP = () => {
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-2/5">
        <div className="h-full text-end flex justify-end items-end pr-3">
          WIP
        </div>
      </div>
      <div className="flex h-3/5">
        <div className="bg-[#C8E2FD] w-full h-full"></div>
        <Nav />
      </div>
    </Frame>
  );
};
