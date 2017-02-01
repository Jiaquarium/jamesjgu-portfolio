import React from 'react';
import {Link} from 'react-router';

const Nav = () => (
  <div className="Nav">
    <ul>
      <li>
        <Link to='/'>home</Link>
      </li>
      <li>
        <Link to='/qupid'>qupid</Link>
      </li>
      <li>
        <Link to='/newsgate'>newsgate</Link>
      </li>
      <li>
        <Link to='/arguewithastranger'>argue with a stranger</Link>
      </li>
    </ul>
  </div>
);

export default Nav;