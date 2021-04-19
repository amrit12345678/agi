
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import front from "./front";
import home from "./home";
import contact from "./contact";

class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={front} />
          <Route exact path="/front" component={front} />
          {/* <Route exact path="/login" component={login}/>
          <Route exact path="/testing" component={testing}/> */}
          <Route exact path="/home" component={home}/>
          <Route exact path="/contact" component={contact}/>
          
        </Switch>
      </Router>
    );
  }
}
export default Routing;