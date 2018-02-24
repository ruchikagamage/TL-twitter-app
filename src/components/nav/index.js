import React, { Component } from "react";
import "./styles.css";
import logout from "./../../images/logout.svg";
import { Logo } from "./../common";

class Navigation extends Component {

  logout = () =>{
    this.props.setLogout();
  }

  render() {
    return (
      <nav className="navbar">
      <div className="nav-brand">
            <Logo size={30} />
          </div>
        <div className="nav-info">         
          <a  onClick={this.logout.bind(this)} className="logout-button">
            <img src={logout} className="logout" alt="log out"/>
          </a>
          <h3 className="f-c-light-ash f-w-regular f-z-12 login-user l-s-1" >
            {localStorage.getItem('screen_name')}
          </h3>
        </div>
      </nav>
    );
  }
}

export default Navigation;
