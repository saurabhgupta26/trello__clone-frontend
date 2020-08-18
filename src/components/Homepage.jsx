import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "./trello_logo.png";
import hero_img from "./assets/hero-a.svg";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              <img className="logo" src={logo} alt="logo1" />
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <NavLink to="/login">
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink className='signup_btn' to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="container1">
            <div className="flex">
              <div className="hero_body">
                <h3>
                  Trello lets you work more collaboratively and get more done.
                </h3>
                <p>
                  Trello’s boards, lists, and cards enable you to organize and
                  prioritize your projects in a fun, flexible, and rewarding
                  way.
                </p>
              </div>
              <div className="hero_img">
                <img src={hero_img} alt="hero_i" />
              </div>
            </div>
            <div className="flex flex1">
              <input
                type="text"
                className="signupText"
                name=""
                placeholder="Email"
              />
              <a class="waves-effect waves-light btn-large">Sign Up - It's Free!</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
