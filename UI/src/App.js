import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsCondition from "./Pages/TermsCondition"
import Connect from "./Pages/Connect"

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/connect" component={Connect} />
        <Route exact path="/terms" component={TermsCondition} />
    </Switch>
  );
}

export default App;
