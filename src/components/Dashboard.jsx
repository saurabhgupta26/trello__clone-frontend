import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import Header from "./Header";
import Sidenav from "./Sidenav";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Header /> 
        <h4>We are in the dashboard!</h4>
        <p>Welcome!!!</p>
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Dashboard);
