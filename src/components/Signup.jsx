import React from "react";
import { connect } from "react-redux";
import { handleSignup } from "../store/actions";
import logo from "./assets/trello_b.png";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username : '',
        email : '',
        password: ''
    };
  }
  handleInput = ({target : {name, value}}) => {
      this.setState({[name]: value})
  }
  handleSubmit= () => {
    console.log("In submit");
      let url = 'https://localhost:4000/users/';
      fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'},
            body:JSON.stringify({user:this.state}),
        }).then(res => {
            if(res.status === 200) {
              this.props.history.push('/login'); 
            }
        })
  }

  render() {
      let {username, email, password} = this.state;
    return (
      <main className="signup_bkg">
        <div className="signup_card">
          <img className='logo' src={logo} alt="logo1"/>
          <h4>Sign up for your account</h4>
          <a className="primary_color" href="/login">
            Have an account?
          </a>
          <div className="">        
            <input
              className="form_field"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleInput}
              value={username}
            />
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
            <input
              type="submit"
              value="Sign Up"
              className="signup_button"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </main>
    );
  }
}
