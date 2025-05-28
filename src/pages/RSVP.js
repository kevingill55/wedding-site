import React, { useCallback, useState } from "react";
import aws from "aws-sdk";
import { PropTypes } from "prop-types";
import { BasicNav } from "../components/Nav";

const TABLE_NAME = "kaleighandkevinwedding";

const dynamodb = new aws.DynamoDB({
  apiVersion: "2012-08-10",
  region: "us-east-1",
  credentials: {
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY_PROD,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_PROD,
  },
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [attend, setAttend] = useState("");
  const [stay, setStay] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const isSubmitDisabled =
    stay.length === 0 || attend.length === 0 || name.length === 0;

  const onSubmit = useCallback(() => {
    setError("");
    setSuccess(false);

    setIsSubmitting(true);
    const uuid = crypto.randomUUID();

    const putItemParams = {
      Item: {
        id: {
          S: uuid,
        },
        name: {
          S: name,
        },
        notes: {
          S: notes,
        },
        attend: {
          S: attend,
        },
        stay: {
          S: stay,
        },
      },
      TableName: TABLE_NAME,
    };

    dynamodb.putItem(putItemParams, (err, data) => {
      if (err) {
        setIsSubmitting(false);
        setError("System error");
        console.log("PutItem error", err);
      } else {
        setIsSubmitting(false);
        setSuccess(true);
        console.log("PutItem successful", data);
      }
    });
  }, [name, notes, attend, stay, error]);

  return (
    <div className="w-full flex flex-col items-center">
      <BasicNav />
      <div className="text-primary sm:mt-[125px] mt-[75px] mb-12 sm:max-w-[900px] w-[85%] flex flex-col sm:flex-row sm:gap-10 items-center justify-center">
        <div className="mb-6 flex flex-col sm:w-[70%]">
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Enter your name
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <input
              className="bg-gray-100 appearance-none border border-primary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="enter-code-input"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Will you attend the wedding weekend?
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <div className="flex gap-6">
              <RadioButton
                setFunc={setAttend}
                id="attend"
                label="Yes"
                checked={attend === "Yes"}
              />
              <RadioButton
                setFunc={setAttend}
                id="attend"
                label="No"
                checked={attend === "No"}
              />
            </div>
          </div>
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Will you stay at the venue?
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <div className="flex gap-6">
              <RadioButton
                setFunc={setStay}
                id="stay"
                label="Yes"
                checked={stay === "Yes"}
              />
              <RadioButton
                setFunc={setStay}
                id="stay"
                label="No"
                checked={stay === "No"}
              />
            </div>
          </div>
          <div className="pb-1 mt-10 font-temp w-fit leading-4">
            Notes (optional)
          </div>
          <div className="pl-4 mt-2 border-primary border-l">
            <textarea
              className="bg-gray-100 appearance-none border border-primary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="enter-code-input"
              type="text"
              maxLength={128}
              rows={3}
              placeholder="RSVP'ing for someone else, questions, etc"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              disabled={isSubmitDisabled || isSubmitting}
              onClick={() => {
                onSubmit();
              }}
              className="px-4 py-2 rounded-sm flex justify-end gap-2 shadow-sm font-ROM items-center bg-primary disabled:bg-primary/70 text-accent disabled:cursor-not-allowed"
            >
              {isSubmitting && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
          <div className="flex justify-end pt-2 h-[25px]">
            {error && (
              <div className="text-sm">{`Failed to RSVP: ${error}`}</div>
            )}
            {success && <div>{`Successfully RSVP'd`}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
