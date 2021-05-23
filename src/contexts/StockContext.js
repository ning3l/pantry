// context to keep track of the stock items
import { createContext, useReducer } from "react";
import { reducer } from "../reducers/stockReducer";

export const StockContext = createContext();

// FOR TS REFACTOR
// interface StockItem {
//   id: string;
//   name: string;
//   expiryDate: string;
//   consumed: boolean;
// }

// interface ContextProps {
//   state: StockItem[];
//   dispatch: ({ type }: { type: string }) => void;
// }

// export const StockContext = createContext<ReturnVals | null>(null);
// export const DispatchContext = createContext(undefined as any);

const defaultItems = [
  {
    id: "1",
    name: "pasta",
    expiryDate: "2021-10-10",
    consumed: false,
  },
  {
    id: "2",
    name: "rice",
    expiryDate: "2021-12-03",
    consumed: true,
  },
  {
    id: "3",
    name: "potatoes",
    expiryDate: "2021-04-15",
    consumed: false,
  },
];

export function StockProvider({ children }) {
  const [stock, dispatch] = useReducer(reducer, defaultItems);

  return (
    <StockContext.Provider value={{ stock, dispatch }}>
      {children}
    </StockContext.Provider>
  );
}
