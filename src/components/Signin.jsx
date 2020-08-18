import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleSignin } from "../store/actions";
import { userInfo } from "../store/types";
import logo from "./assets/trello_b.png";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let url = "https://localhost:4000/users/login";
    let userInfo = { ...this.state };
    this.props.dispatch(handleSignin(url, userInfo, this.props.history));
  };
  render() {
    let { email, password, error } = this.state;
    return (
      <main className="signup_bkg">
        <div className="signup_card">
        <img className="logo" src={logo} alt="logo1" />
          <h4>Log in to Trello</h4>
          <a className="primary_color" href="/signup">
            Need an account?
          </a>
          <div className="">
            <input
              className="form_field"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleInput}
              value={email}
            />
            <input
              className="form_field"
              type="password"
              name="password"
              placeholder="*****"
              onChange={this.handleInput}
              value={password}
            />
            <p>{error && error}</p>
            <button className="signup_button" onClick={this.handleSubmit}>
              Log In
            </button>
          </div>
        </div>
      </main>
    );
  }
}

function mapState(state) {
  return { ...state };
}

export default connect(mapState)(withRouter(Signin));
