import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import UserList from "./components/UserList";
import {connect} from "react-redux";
import {fetchUsers} from "./store/actions";

const mapDispatchToProps = {
  fetchUsers
}

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contacts">
              <UserList />
            </Route>
        </Router>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
