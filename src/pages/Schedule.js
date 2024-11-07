import { Nav, Frame } from "../components";

export const Schedule = () => {
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-3/5">
        <div className="h-full pl-3 flex flex-col justify-end gap-6">
          <div>
            <div className="font-ROM">FRI NOV 7</div>
            <div>4:00 PM CHECK IN</div>
            <div>6:30 PM WELCOME PARTY</div>
          </div>

          <div>
            <div className="font-ROM">SAT NOV 8</div>
            <div>8:00-10:00 AM BREAKFAST</div>
            <div>4:00-11:00 PM WEDDING FESTIVITIES</div>
          </div>

          <div>
            <div className="font-ROM">SUN NOV 9</div>
            <div>8:00-10:00 AM BREAKFAST</div>
            <div>11:00 AM CHECK OUT </div>
          </div>
        </div>
      </div>
      <div className="flex h-2/5">
        <div className="bg-[#C8E2FD] w-full h-full"></div>
        <Nav />
      </div>
    </Frame>
  );
};
