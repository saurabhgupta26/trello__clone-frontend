import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../store/actions";
import Header from "./Header";

class AddBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let url = "/add/board";
    let boardInfo = { ...this.state };
    this.props.dispatch(handleAddBoard(url, boardInfo, this.props.history));
  };

  render() {
    return (
      <>
        <Header />
        <input type="text" placeholder="Add Board Title" />
        <button onClick>Create Board</button>
      </>
    );
  }
}
function mapState(state) {
  return { ...state };
}

export default connect(mapState)(AddBoard);
