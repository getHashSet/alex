import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";

// ========== //
//   EXPORT   //
// ========== //
export default function App() {
  return (
    <div className="App">
      <Switch>
        {/* ============= */}
        {/*   Home Page   */}
        {/* ============= */}
        <Route exact path="/" render={() => <Home />} />

        {/* ============ */}
        {/*   404 Page   */}
        {/* ============ */}
        <Route render={() => <Error />} />
      </Switch>
    </div>
  );
}
