import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import Header from "./Header";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Header />
        <form action="post">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="bio" placeholder="Bio" />
          <button>Save</button>
        </form>
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}
export default connect(mapState)(Setting);
