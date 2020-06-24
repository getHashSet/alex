import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Cost from "./Cost/Cost";
import ContactUs from "./ContactUs/ContactUs";
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

        {/* ============= */}
        {/*   Cost Page   */}
        {/* ============= */}
        <Route exact path="/cost" render={() => <Cost />} />

        {/* ============== */}
        {/*   About Page   */}
        {/* ============== */}
        <Route exact path="/about" render={() => <ContactUs />} />

        {/* ============ */}
        {/*   404 Page   */}
        {/* ============ */}
        <Route render={() => <Error />} />
      </Switch>
    </div>
  );
}
