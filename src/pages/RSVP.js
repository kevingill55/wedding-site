import React, { useCallback, useState } from "react";
import { PropTypes } from "prop-types";
import aws from "aws-sdk";
import { Nav, Frame } from "../components";

const dynamodb = new aws.DynamoDB({
  apiVersion: "2012-08-10",
  region: "us-east-1",
  credentials: {
    secretAccessKey: "3RA7E/kfknonhzb85IyNOCZNDPnT084hFbr0DJwz",
    accessKeyId: "AKIA3IKVF6LPF55PH3NA",
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
  const [code, setCode] = useState("");
  const [attend, setAttend] = useState("");
  const [stay, setStay] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isSubmitDisabled =
    stay.length === 0 || attend.length === 0 || code.length === 0;

  const onSubmit = useCallback(() => {
    let item = undefined;

    setError("");
    setSuccess(false);
    const formattedCode = code.trim().toLowerCase();
    const splitCode = formattedCode.split("@");
    if (splitCode.length !== 2) {
      console.log("not 2");
      setError("Invalid code");
      return;
    } else {
      if (splitCode[1] !== "kk2025") {
        console.log("not kk");
        setError("Invalid code");
        setIsSubmitting(false);
        return;
      }

      const getItemParams = {
        TableName: "kaleighandkevinwedding",
        Key: {
          id: {
            S: splitCode[0],
          },
        },
      };

      setIsSubmitting(true);

      dynamodb
        .getItem(getItemParams)
        .promise()
        .then((x) => {
          item = x.$response.data.Item;
          console.log("GetItem successful");

          if (!item || item.id["S"] !== splitCode[0]) {
            setError("Something went wrong");
            setIsSubmitting(false);
            return;
          }

          const id = splitCode[0];

          const putItemParams = {
            Item: {
              id: {
                S: id,
              },
              attend: {
                S: attend,
              },
              stay: {
                S: stay,
              },
            },
            TableName: "kaleighandkevinwedding",
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
        })
        .catch((err) => {
          setIsSubmitting(false);
          setError("Invalid code");
          console.log("GetItem failed", err);
        });
    }
  }, [code, attend, stay, error]);

  return (
    <Frame>
      <div className="bg-[#C9E7DF] h-2/3 text-sm">
        <div className="h-full text-end flex justify-end items-end pr-3">
          <div>
            <form className="flex flex-col gap-10 py-2">
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

              <div className="flex flex-col items-end">
                <button
                  type="button"
                  disabled={isSubmitDisabled || isSubmitting}
                  onClick={() => {
                    onSubmit();
                  }}
                  className="px-4 py-2 rounded-xl flex justify-end gap-2 shadow-sm font-ROM items-center bg-white disabled:bg-white/40 disabled:text-gray-400"
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
                  {isSubmitting ? "SUBMITTING" : "SUBMIT"}
                </button>
                <div className="pt-1 h-[25px]">
                  {error && <div>{`Failed to RSVP: ${error}`}</div>}
                  {success && <div>{`Successfully RSVP'd`}</div>}
                </div>
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
