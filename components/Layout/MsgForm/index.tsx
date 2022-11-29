//WORK IN PROGRES!!!

import { FC, useEffect } from "react";
import React, { useState } from "react";

export const UserInput: FC = () => {
  const [question, setQuestion] = useState('');
  const [arrQuestion, setArrQuestion]:any = useState([]);

  return (
    <div>
      <input 
        value={question}
        placeholder={"Type here"}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick= {(e) => 
            setArrQuestion([...arrQuestion, question])} >
        Send
      </button>
      <br />
      <br />
      <ol>
      {arrQuestion.map((arr: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
        <li key={index}>{arr}</li>
      ))}
    </ol>
      <div >
        <ul>
        

       </ul> </div>
    
    </div>
  );
};


