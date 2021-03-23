import React, { createContext, useReducer } from "react";
import stockReducer from "../reducers/stockReducer";

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

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface ReturnVals {
  // stock: StockItem[];
  // addStockItem: (item: StockItem) => void;
  // deleteStockItem: (id: string) => void;
  // completedStockItem: (id: string) => void;
  // editStockItem: (id: string, newName: string) => void;
}

// export const PantryContext = createContext<ReturnVals | null>(null);

interface ContextProps {
  state: StockItem[];
  dispatch: ({ type }: { type: string }) => void;
}

// create 2 contexts for better perfomance: (most components only need dispatch, but are changing together with the items if you store both in one context)
// NOTE: Do not wrap them in an obj value={{ dispatch }}, but pass as vars !!! value={dispatch},
// otherwise you will create a new dispatch obj each time which will also trigger a rerender
export const PantryContext = createContext<ReturnVals | null>(null);
export const DispatchContext = createContext(undefined as any);

const PantryProvider: React.FC = ({ children }) => {
  // const hi = useStock(defaultItems);
  // return <PantryContext.Provider value={hi}>{children}</PantryContext.Provider>;

  const [items, dispatch] = useReducer(stockReducer, defaultItems);
  return (
    <PantryContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </PantryContext.Provider>
  );
};

export default PantryProvider;
