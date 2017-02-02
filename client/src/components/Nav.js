import React from 'react';
import {Link} from 'react-router';

const Nav = () => (
  <div className="Nav">
    <ul>
      <li>
        <Link className="link" to='/'>home</Link>
      </li>
      <li>
        <Link className="link" to='/projects'>projects</Link>
      </li>
      <li>
        <Link className="link" to='/art'>art</Link>
      </li>
    </ul>
    <img className="bear" src={require('../assets/img/colorbear.png')} />  
  </div>
);

export default Nav;