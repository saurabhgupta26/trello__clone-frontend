import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import logo from "./assets/trello_logo.png"

class Header extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <>
      <div className="flex">
          <img src={logo} className='logo' alt="logo1"/>
      </div>
      <nav>
          <li>
              Home
          </li>
          <li>
              Settings
          </li>
          <li>
              Profile
          </li>
      </nav>

      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Header);
