import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pantry from "../pages/Pantry";
import NoMatch from "../pages/NoMatch";
import Drawer from "../pages/Nav";

import "./styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  // HANDLE SIDEBAR NAV
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <Router>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit" onClick={toggleDrawer(true)}>
            PANTRY Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer state={state} toggleDrawer={toggleDrawer} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pantry" component={Pantry} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
