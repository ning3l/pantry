import React, { useState, useEffect } from "react";
import useToggle from "./hooks/toggleState";
import useStock from "./hooks/useStock";
import { StockList } from "./components/StockList";
import { StockForm } from "./components/StockForm";
import { Grid, Paper, AppBar, Toolbar, Typography } from "@material-ui/core";

import useLocalStorage from "./hooks/useLocalStorage";

const items = [
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

export default function Page() {
  const myPantry = JSON.parse(window.localStorage.getItem("stock") || "[]");

  const {
    stock,
    addStockItem,
    deleteStockItem,
    completedStockItem,
    editStockItem,
  } = useStock(myPantry);

  useEffect(() => {
    window.localStorage.setItem("stock", JSON.stringify(stock));
  }, [stock]);

  // testing the custom localStorage hook
  const [mood, setMood] = useLocalStorage("mood", "happy");

  // why is paper not full width?
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
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <StockForm addStockItem={addStockItem} />
          <StockList
            stock={stock}
            deleteStockItem={deleteStockItem}
            completedStockItem={completedStockItem}
            editStockItem={editStockItem}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
