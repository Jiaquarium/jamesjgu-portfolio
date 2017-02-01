import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Arts from './components/Arts';
import NavContainer from './components/NavContainer';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={NavContainer}>
          <Route path="/" component={Home} />
          <Route path="/qupid" component={Project1} />
          <Route path="/newsgate" component={Project2} />
          <Route path="/arguewithastranger" component={Project3} />
          <Route path="/arts" component={Arts} />
        </Route>
      </Router>
    );
  }
}

export default App;
