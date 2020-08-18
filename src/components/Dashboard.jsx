import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";

class Dashboard extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <>
        <h1>We are in the dashboard!</h1>
        <p>Welcome!!!</p>
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Dashboard);
