import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import VaultSidemenu from "../components/vault/vaultSidemenu";

export default class Sidemenu extends Component {
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return (
      <div>
        <a href="javascript:void(0)" onClick={this.closeNav}>
          &times;
        </a>

        <VaultSidemenu />
      </div>
    );
  }
}
