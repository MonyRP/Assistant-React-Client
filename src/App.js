import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Sidemenu from "./components/sidemenu";
import Vault from "./components/vault/vault";

import "@fortawesome/fontawesome-free/css/all.css";

export default class App extends Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <div className="container-fluid">
            <div id="mySidenav" className="sidenav border">
              <Sidemenu />
            </div>

            <div id="main">
              <a onClick={this.openNav} href="javascript:void(0)">
                <i className="fas fa-arrow-right" />
              </a>

              <Route
                path="/vault/:site"
                render={props => (
                  <Vault key={props.match.params.site} {...props} />
                )}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
