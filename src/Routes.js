import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";



const Login = asyncComponent(() => import("./containers/authentication"));
const SetPinCode = asyncComponent(() => import("./containers/setpincode"));
const Home = asyncComponent(() => import("./containers/home"));
const AsyncNotFound = asyncComponent(() => import("./containers/pagenotfound"));



export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Login} props={childProps} />
    <AppliedRoute path="/home" exact component={Home} props={childProps} />
    <AppliedRoute path="/set-pin-code" exact component={SetPinCode} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>;
