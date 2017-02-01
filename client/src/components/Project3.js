import React from 'react';
import AwasLobby from '../assets/img/awas-lobby.png';
import Github from '../assets/img/github-512.png';

const Project3 = () => (
  <div className="App">
    
    <div className="title-container">
      <h2>Argue with a Stranger</h2>
    </div>
    
    <div className="github-container">  
      <a href="https://github.com/james-gu/tremendous-turnips">
        <img className="github" alt="" src={Github} />
      </a>
    </div>

    <div>
      <img className="image" alt="" src={AwasLobby} />
    </div>

    <div className="description">
      <p>
        Democrat vs. Republican? Angular vs. React? U.S.A vs. Canada? Argue with a Stranger allows you to debate a random topic one-on-one with a stranger in real-time. Argue your point of view and prove how right you are!
      </p>
    </div>

    <div className="description">
      <p>
        Integrated Socket.IO with Sequelize/MySQL to present consistent frontend views for multiple users in real-time. Implemented unique channels to handle live private room-by-room interactions using Socket.IO namespaces. Modularized RESTful Express server, router and controllers for improved code maintainability and readability.
      </p>
    </div>

  </div>
);

export default Project3;