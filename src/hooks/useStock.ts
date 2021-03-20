import { useState, Dispatch } from "react";

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

export default (initialStock: StockItem[]): ReturnVals => {
  const [stock, setStock] = useState<StockItem[]>(initialStock);
  // TO DO:
  // use this code instead when you figured out the correct annotations & wrote custom hook:
  // const [stock, setStock] = useDB("stock", initialStock);

  return {
    stock,
    addStockItem: (item: StockItem): void => {
      // move the item creation logic from StockForm here
      setStock((prev) => [...prev, item]);
    },
    deleteStockItem: (id: string): void => {
      setStock((prev) => prev.filter((item) => item.id !== id));
    },
    completedStockItem: (id: string): void => {
      setStock((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, consumed: !item.consumed } : item
        )
      );
    },
    editStockItem: (id: string, newName: string): void => {
      // alternatively, you could filter out the item to update and exchange it with the return val from your db req
      setStock((prev) =>
        prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
      );
    },
  };
};
