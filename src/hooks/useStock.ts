import { useState } from "react";

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
  completeStockItem: (id: string) => void;
  editStockItem: (id: string, newName: string) => void;
}

const test = [
  { id: "123", name: "test", expiryDate: "testDate", consumed: false },
];

export default (initialStock: StockItem[]): ReturnVals => {
  const [stock, setStock] = useState<StockItem[]>(test);

  // OR: const [stock, setStock] = useDB("stock", initialStock) AND create 2nd custom hook that interfaces with the DB

  return {
    stock,
    addStockItem: (item: StockItem): void => {
      // move the item creation logic from StockForm here
      setStock((prev) => [...prev, item]);
    },
    deleteStockItem: (id: string): void => {
      setStock((prev) => prev.filter((item) => item.id !== id));
    },
    completeStockItem: (id: string): void => {
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
