import React from "react";

import logo from "./images/table.jpg";
import signIn from "./images/table.jpg";

import { Link } from "react-router-dom";
import { AuthLink } from "./AuthLink";

function NavLinks() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/table">
          Table
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo col-md-5 col-sm-5 col-xs-8">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <span className="text">ITEMS FOR A TABLE.</span>
        </div>
        <div className="mobile-togle col-md-12 col-sm-12 col-xs-12">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="hamburger"
                className="navbar-toggle x collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-x"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand"></div>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-x">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <div className="search1">
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </li>
                <NavLinks />
                <li className="nav-item">
                  <AuthLink className="nav-link disabled" to="/auth/sign-in">
                    Sign-in
                  </AuthLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="right_section col-md-5 col-xs-12">
          <div className="search">
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavLinks />
            </div>
          </nav>
        </div>

        <div className="sign-in col-md-2">
          <span className="dvider"></span>
          <div className="sign">
            <AuthLink to="/auth/sign-in">
              Sign-in
            </AuthLink>
          </div>
        </div>
      </div>
    </header>
  );
}
