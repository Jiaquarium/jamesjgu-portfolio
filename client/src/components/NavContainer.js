import React from 'react';
import Nav from './Nav';
import Header from './Header';

const NavContainer = (props) => (
  <div className="Nav-Container">
    <Header />
    <Nav />
    {props.children}
  </div>
);

export default NavContainer;