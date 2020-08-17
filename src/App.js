import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Error from "./components/Error.jsx";
import Setting from "./components/Setting.jsx";

class App extends React.Component {
  // componentDidMount() {}
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Homepage} path="/homepage" exact />
          {/* <Route render={() => <Signin />} path="/login" /> */}
          {/* <Route render={() => <Setting />} path="/setting/:profileSlug" /> */}
          <Route component={Signup} path="/signup" />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
