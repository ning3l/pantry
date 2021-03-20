import React, { useState, useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { PantryContext } from "../../../contexts/PantryContext";

// MAKE 1 interface in page in default export it here ?
interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  addStockItem: (item: StockItem) => void;
}

export const StockForm: React.FC = () => {
  const [val, setVal] = useState("");
  const { addStockItem } = useContext(PantryContext);

  // TO DO:
  // CHANGE THIS to make use of the custom form hook instead
  // name of item
  // expiry date
  // ~ amount left
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TO DO
    // move this logic into Pages > addStockItem after you updated form to collect all data
    let newItem = {
      id: uuid(),
      name: val,
      expiryDate: "2021-10-10",
      consumed: false,
    };
    addStockItem(newItem);
    setVal("");
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={val}
          onChange={handleChange}
          margin="normal"
          label="add new item"
          fullWidth
        />
      </form>
    </Paper>
  );
};
