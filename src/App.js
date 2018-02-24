import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }


  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
        <Routes childProps={childProps} />
    );
  }
}

export default withRouter(App);
