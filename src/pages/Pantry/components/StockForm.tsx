import React, { useContext } from "react";

import useInput from "../../../hooks/useInput";
import { Paper, TextField } from "@material-ui/core";
import { v4 as uuid } from "uuid";

import { StockContext } from "../../../contexts/StockContext";

export const StockForm: React.FC = () => {
  const [value, handleChange, reset] = useInput("");

  const { dispatch } = useContext(StockContext);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TO DO
    // move this logic into Pages > addStockItem after you updated form to collect all data
    let newItem = {
      id: uuid(),
      name: value,
      expiryDate: "2021-10-10",
      consumed: false,
    };
    dispatch({ type: "ADD", item: newItem });
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="add new item"
          fullWidth
        />
      </form>
    </Paper>
  );
};
