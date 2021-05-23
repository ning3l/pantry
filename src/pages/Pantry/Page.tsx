import { useContext } from "react";
import { StockList } from "./components/StockList";
import { StockForm } from "./components/StockForm";
import { Grid, Paper } from "@material-ui/core";

import { ThemeContext } from "../../contexts/ThemeContext";

export default function Page() {
  // ADD TO NOTES AND DELETE
  // const myPantry = JSON.parse(window.localStorage.getItem("stock") || "[]");

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: isDarkMode ? "#3f3333" : "#fafafa",
      }}
      elevation={0}
    >
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <StockForm />
          <StockList />
        </Grid>
      </Grid>
    </Paper>
  );
}
