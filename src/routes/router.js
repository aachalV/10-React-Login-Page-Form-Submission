import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "../components/Forms/Signup";
import User from "../pages/User";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/signup" exact component={Signup} />
          <Route path="/users/message" exact component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}
