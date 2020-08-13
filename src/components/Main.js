import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import Contact from "./Contact";
import Project from "./Project";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
  </Switch>
);

export default Main;
