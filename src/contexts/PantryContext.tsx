import React, { createContext } from "react";
import useStock from "../hooks/useStock";

const defaultStockItems = [
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
  stock: StockItem[];
  addStockItem: (item: StockItem) => void;
  deleteStockItem: (id: string) => void;
  completedStockItem: (id: string) => void;
  editStockItem: (id: string, newName: string) => void;
}

export const PantryContext = createContext<ReturnVals | null>(null);

const PantryProvider: React.FC = ({ children }) => {
  const hi = useStock(defaultStockItems);
  return <PantryContext.Provider value={hi}>{children}</PantryContext.Provider>;
};

export default PantryProvider;
