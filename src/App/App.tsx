import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pantry from "../pages/Pantry";
import NoMatch from "../pages/NoMatch";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">pantry logo</Link>
      </nav> */}
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/pantry" component={Pantry} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
