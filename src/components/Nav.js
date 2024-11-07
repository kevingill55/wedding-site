import { useNavigate, useMatch } from "react-router-dom";

const NavItem = ({ label }) => {
  const lowerCasedLabel = label.toLowerCase();
  const navigate = useNavigate();
  const active = useMatch(lowerCasedLabel === "home" ? "" : lowerCasedLabel);
  return (
    <div
      onClick={() =>
        navigate(`/${lowerCasedLabel === "home" ? "" : lowerCasedLabel}`)
      }
      className={`cursor-pointer text-sm ${active && "underline"}`}
    >
      {label}
    </div>
  );
};

export const Nav = () => {
  return (
    <div className="bg-[#E3D2DA] items-end justify-end pb-3 px-3 w-full h-full flex flex-col gap-1">
      <NavItem label="HOME" />
      <NavItem label="SCHEDULE" />
      <NavItem label="TRAVEL" />
      <NavItem label="RSVP" />
    </div>
  );
};