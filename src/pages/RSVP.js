import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Nav, Frame } from "../components";

const RadioButton = ({ label, checked, setFunc, id }) => {
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={`${id}-radio-${label.toLowerCase()}-input`}>
        {label}
      </label>
      <input
        id={`${id}-radio-${label.toLowerCase()}-input`}
        type="radio"
        onChange={(e) => {
          if (e.target.checked) {
            setFunc(label);
          }
        }}
        checked={checked}
        name={`${id}-radio-${label.toLowerCase()}`}
        className="w-4 h-4 border-gray-100"
      />
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  setFunc: PropTypes.func.isRequired,
};

export const RSVP = () => {
  const [code, setCode] = useState("");
  const [attend, setAttend] = useState("");
  const [stay, setStay] = useState("");
  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-2/3 text-sm">
        <div className="h-full text-end flex justify-end items-end pr-3">
          <div>
            <form className="flex flex-col gap-10 py-4">
              <div className="flex flex-col gap-2 items-end">
                <label htmlFor="enter-code-input" className="font-ROM">
                  ENTER CODE
                </label>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E3D2DA]"
                    id="enter-code-input"
                    type="text"
                    placeholder="CODE"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <label className="font-ROM">WILL YOU ATTEND THE WEDDING?</label>
                <div className="flex gap-6">
                  <RadioButton
                    setFunc={setAttend}
                    id="attend"
                    label="YES"
                    checked={attend === "YES"}
                  />
                  <RadioButton
                    setFunc={setAttend}
                    id="attend"
                    label="NO"
                    checked={attend === "NO"}
                  />
                  <RadioButton
                    setFunc={setAttend}
                    id="attend"
                    label="MAYBE"
                    checked={attend === "MAYBE"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end">
                <label className="font-ROM">
                  WOULD YOU LIKE TO STAY AT FOXFIRE?
                </label>
                <div className="flex gap-6">
                  <RadioButton
                    setFunc={setStay}
                    id="stay"
                    label="YES"
                    checked={stay === "YES"}
                  />
                  <RadioButton
                    setFunc={setStay}
                    id="stay"
                    label="NO"
                    checked={stay === "NO"}
                  />
                  <RadioButton
                    setFunc={setStay}
                    id="stay"
                    label="MAYBE"
                    checked={stay === "MAYBE"}
                  />
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => {}}
                  className="px-4 py-2 rounded-xl shadow-sm font-ROM w-24 bg-white"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex h-1/3">
        <div className="bg-[#C8E2FD] w-full h-full"></div>
        <Nav />
      </div>
    </Frame>
  );
};
