import { useState } from "react";

function useToggle(initialVal: boolean = false): [boolean, () => void] {
  const [val, setVal] = useState(initialVal);
  const toggleSwitch = () => {
    setVal(!val);
  };
  return [val, toggleSwitch];
}

export default useToggle;
