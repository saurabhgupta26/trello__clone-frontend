import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import logo from "./assets/trello_b.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { articles } = this.props;
    return (
      <>
        <div class="nav-wrapper">
          <nav className="nav flex flex2">
            <NavLink to="/dashboard">
              <img
                className="header_icons"
                src="https://image.flaticon.com/icons/svg/2948/2948210.svg"
                alt="plus"
              />
            </NavLink>

            <form>
              <div class="input-field">
                <input id="search" type="search" required />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>

            <img src={logo} className="logo" alt="logo1" />
            <li>
              <NavLink to='/addBoard/'>
              <img
                className="header_icons"
                src="https://image.flaticon.com/icons/svg/992/992482.svg"
                alt="plus"
              />
              </NavLink>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown1">
                Drop Me!
              </a>
              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="#!">one</a>
                </li>
                <li class="divider" tabindex="-1"></li>
                <li>
                  <a href="#!">two</a>
                </li>
                <li class="divider" tabindex="-1"></li>
                <li>
                  <a href="#!">three</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/userProfile/">
                <img
                  className="header_icons"
                  src="https://image.flaticon.com/icons/svg/992/992523.svg"
                  alt="plus"
                />
              </NavLink>
            </li>
          </nav>
        </div>
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Header);
