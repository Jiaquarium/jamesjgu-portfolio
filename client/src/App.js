import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ProjectNav from './components/ProjectNav';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Art from './components/Art';
import NavContainer from './components/NavContainer';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={NavContainer}>
          <Route path="/" component={Home} />
          <Route path="/projects" component={ProjectNav} />
          <Route path="/projects/qupid" component={Project1} />
          <Route path="/projects/newsgate" component={Project2} />
          <Route path="/projects/arguewithastranger" component={Project3} />
          <Route path="/art" component={Art} />
        </Route>
      </Router>
    );
  }
}

export default App;
