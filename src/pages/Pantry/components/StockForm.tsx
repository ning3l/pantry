import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInput from "../hooks/useInput";

interface StockItem {
  id: number;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  addStockItem: (item: StockItem) => void;
}

export const StockForm: React.FC<Props> = ({ addStockItem }) => {
  const [val, handleChange, reset] = useInput("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newItem = {
      id: 5,
      name: "test",
      date: "",
      expired: false,
    };
    addStockItem(newItem);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={val} onChange={() => handleChange} />
      </form>
    </Paper>
  );
};
