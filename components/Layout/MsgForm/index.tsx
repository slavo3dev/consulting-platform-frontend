//WORK IN PROGRES!!!


import { FC } from "react";
import React, { useState } from "react";

export const UserInput: FC = () => {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}></label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {" "}
        Send{" "}
      </button>
      <br />
      <br />
      You entered: {state}
    </div>
  );
};
