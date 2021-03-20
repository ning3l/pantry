import React, { useState, useEffect } from "react";
import useStock from "../../hooks/useStock";
import PantryProvider from "../../contexts/PantryContext";
import { StockList } from "./components/StockList";
import { StockForm } from "./components/StockForm";
import { Grid, Paper, AppBar, Toolbar, Typography } from "@material-ui/core";

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
          <PantryProvider>
            {/* <StockForm addStockItem={addStockItem} />
            <StockList
              stock={stock}
              deleteStockItem={deleteStockItem}
              completedStockItem={completedStockItem}
              editStockItem={editStockItem}
            /> */}
            <StockForm />
            <StockList />
          </PantryProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
