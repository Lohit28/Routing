import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home1 from "./Home1";
import Shop from "./Shop";
import ShopItem from "./ShopItem";
export default function App1() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route exact path="/Shop" component={Shop} />
            <Route path="/Shop/:id" component={ShopItem} />
            <Route>OOps ! wrong page </Route>
          </Switch>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/Contact">Contact</Link>
          </div>
          <div>
            <Link to="/Shop">shop</Link>
          </div>
        </div>
      </Router>
    </div>
  );
}
