import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../components/Forms/Signup";
import User from "../pages/user/renderUser";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/signup" exact component={Signup} />
          <Route path="/users/renderUser" exact component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
