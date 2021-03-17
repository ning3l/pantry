import React, { useState } from "react";

interface StateVals {
  val: string;
  handleChange: () => void;
  reset: () => void;
}

export default (initialVal: string) => {
  const [val, setVal] = useState(initialVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const reset = () => {
    setVal("");
  };

  return [val, handleChange, reset];
};
