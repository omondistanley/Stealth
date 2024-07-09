import React, { useEffect, useState } from "react";
import Registration from "./Registration";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
