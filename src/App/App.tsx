import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pantry from "../pages/Pantry";
import NoMatch from "../pages/NoMatch";

import "./styles";
import { Grid, Paper, AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <Router>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">CURRENT STOCKLIST</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pantry" component={Pantry} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
