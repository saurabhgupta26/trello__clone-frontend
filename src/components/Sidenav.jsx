import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Sidenav extends React.Component {
  render() {
    return (
      <>
        <div>
            <Link to='/dashboard'>Boards</Link>
            <Link to='/'>Home</Link>
            <Link to='/templates'>Templates</Link>
        </div>
        
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Sidenav);
