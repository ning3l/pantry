import { useEffect, useState } from "react";

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

// use this function inside your useStock hook so it intercepts the state creation
// how to annotate the return val correcly?
function useLocalStorage(key: string, defaultVal: StockItem[] | string) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
