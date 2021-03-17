import React, { useState } from "react";
import { StockList } from "./components/StockList";
import { StockForm } from "./components/StockForm";
import { Paper, AppBar, Toolbar, Typography } from "@material-ui/core";

const myPantry = [
  {
    id: 1,
    name: "pasta",
    expiryDate: "2021-10-10",
    consumed: false,
  },
  {
    id: 2,
    name: "rice",
    expiryDate: "2021-12-03",
    consumed: false,
  },
  {
    id: 3,
    name: "potatoes",
    expiryDate: "2021-04-15",
    consumed: false,
  },
];

interface StockItem {
  id: number;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

export default function Page() {
  const [stock, setStock] = useState(myPantry);

  const addStockItem = (item: StockItem): void => {
    setStock((prev) => [
      ...prev,
      {
        id: 3,
        name: "potatoes",
        expiryDate: "2021-04-15",
        consumed: false,
      },
    ]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">CURRENT STOCKLIST</Typography>
        </Toolbar>
      </AppBar>
      <StockForm addStockItem={addStockItem} />
      <StockList stock={stock} />
    </Paper>
  );
}
