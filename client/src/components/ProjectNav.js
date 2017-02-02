import React from 'react';
import {Link} from 'react-router';
import QupidLogin from '../assets/img/qupid-login.png';
import NewsgateMain from '../assets/img/newsgate-main.png';
import AwasLobby from '../assets/img/awas-lobby.png';

const ProjectNav = () => (
  <div className="App-expand">
    <div>
      <h2>Projects</h2>
    </div>

    <div className="projects-container">

      <div className="project-container">
        <h4>qupid</h4>
        <div className="crop-container"> 
          <Link className="link" to='/projects/qupid'><img className="crop-img" src={QupidLogin} alt="" /></Link>
        </div>
      </div>

      <div className="project-container">
        <h4>newsgate</h4>
        <div className="crop-container"> 
          <Link className="link" to='/projects/newsgate'><img className="crop-img-web" src={NewsgateMain} alt="" /></Link>
        </div>
      </div>

      <div className="project-container">
        <h4>argue with...</h4>
        <div className="crop-container"> 
          <Link className="link" to='/projects/arguewithastranger'><img className="crop-img-web2" src={AwasLobby} alt="" /></Link>
        </div>
      </div>

    </div>

  </div>
);

export default ProjectNav;