import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Board from "./";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardInfo: "",
      userInfo: "",
    };
  }
  componentDidMount() {
    let url = "/board/";
    let boardInfo = { ...this.state };
    this.props.dispatch(handleSetting(url, boardInfo, this.props.history));
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Dashboard);
