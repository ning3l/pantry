import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pantry from "../pages/Pantry";
import NoMatch from "../pages/NoMatch";
import Drawer from "../pages/Nav";

import NavBar from "./components/NavBar";

import "./styles";

// TO DO
// customise the MUI theme

// CONTEXTS
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { StockProvider } from "../contexts/StockContext";

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
      <ThemeProvider>
        <LanguageProvider>
          <NavBar toggleDrawer={toggleDrawer} />
          <Drawer state={state} toggleDrawer={toggleDrawer} />
          <Switch>
            <StockProvider>
              <Route exact path="/" component={Home} />
              <Route path="/pantry" component={Pantry} />
              <Route component={NoMatch} />
            </StockProvider>
          </Switch>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
