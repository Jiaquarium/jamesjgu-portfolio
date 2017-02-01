import React from 'react';
import {Link} from 'react-router';

const Nav = () => (
  <div className="Nav">
    <ul>
      <li>
        <Link className="link" to='/'>home</Link>
      </li>
      <li>
        <Link className="link" to='/qupid'>qupid</Link>
      </li>
      <li>
        <Link className="link" to='/newsgate'>newsgate</Link>
      </li>
      <li>
        <Link className="link" to='/arguewithastranger'>argue with a stranger</Link>
      </li>
      <li>
        <Link className="link" to='/arts'>arts</Link>
      </li>
    </ul>
  </div>
);

export default Nav;