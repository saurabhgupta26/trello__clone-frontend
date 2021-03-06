import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Error from "./components/Error.jsx";
import Setting from "./components/Setting.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddBoard from "./components/AddBoard.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path="/homepage" exact component={Homepage} />
          <Route render={() => <Signin />} path="/login" />
          {/* <Route render={() => <Setting />} path="/setting/:profileSlug" /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/addBoard' component={AddBoard} />
          <Route component={Error} />
          {/* <Route path="/" render={() => <h1> Hello Ww</h1>} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
