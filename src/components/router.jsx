import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Testing from "../pages/testing";
import Rnb from "../pages/rnb";
import Hiphop from "../pages/hiphop";
import Indie from "../pages/indie";
import Jazz from "../pages/jazz";
import Pop from "../pages/pop";
import Rock from "../pages/rock";
import Classical from "../pages/classical"
import Country from "../pages/country";
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
      <Route path="/rnb" component={Rnb} />
      <Route path="/hiphop" component={Hiphop}/>
      <Route path="/indie" component={Indie}/>
      <Route path="/jazz" component={Jazz}/>
      <Route path="/pop" component={Pop}/>
      <Route path="/rock" component={Rock}/>
      <Route path="/classical" component={Classical}/>
      <Route path="/country" component={Country}/>
    </Switch>
);
