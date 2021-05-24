// context to keep track of the stock items
import { createContext, Dispatch, useReducer } from "react";
import { reducer } from "../reducers/stockReducer";

// interface Props {
//   children: React.ReactNode;
// }

// interface StockItem {
//   id: string;
//   name: string;
//   expiryDate: string;
//   consumed: boolean;
// }

export const StockContext = createContext();
export const DispatchContext = createContext();
// export const StockContext = createContext<ContextProps>({} as ContextProps);

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
    consumed: false,
  },
  {
    id: "3",
    name: "potatoes",
    expiryDate: "2021-04-15",
    consumed: false,
  },
];

export const StockProvider = ({ children }) => {
  const [stock, dispatch] = useReducer(reducer, defaultItems);

  return (
    <StockContext.Provider value={stock}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StockContext.Provider>
  );
};
