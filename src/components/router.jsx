import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Testing from "../pages/testing";
import Artists from "../pages/artists";
import Rnb from "../pages/rnb";
/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/testing" component={Testing} />
      <Route path="/artists" component={Artists} />
      <Route path="/rnb" component={Rnb} />
    </Switch>
);
