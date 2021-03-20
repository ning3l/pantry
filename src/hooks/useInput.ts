import React, { useState } from "react";

type ReturnVals = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

const useInput = (initialVal: string): ReturnVals => {
  const [val, setVal] = useState(initialVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const reset = () => {
    setVal("");
  };

  return [val, handleChange, reset];
};

export default useInput;
