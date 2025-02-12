import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

export const Frame = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full justify-between">
      <div
        onClick={() => navigate("/home")}
        className="text-center cursor-pointer text-3xl h-24 flex items-center justify-center"
      >
        KALEIGH & KEVIN
      </div>
      {children}
      <div className="h-24 text-center text-3xl flex items-center justify-center">
        NOVEMBER 7-9 2025
      </div>
    </div>
  );
};

Frame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
