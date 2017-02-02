import React from 'react';
import JamesGu from '../assets/img/james-gu.jpg';
import LinkedIn from '../assets/img/linkedin.png';
import AngelList from '../assets/img/angellist.png';
import Instagram from '../assets/img/instagram.png';
import Github from '../assets/img/github-512.png';

const Home = () => (
  <div className="App">
    <div>
      <div className="home-title-container">
        <h2>About Me</h2>
      </div>
      <div className="icon-container">
        <a href="https://www.github.com/james-gu"><img className="icon" alt="" src={Github} /></a>
        <a href="https://www.linkedin.com/in/jamesgu1993"><img className="icon" alt="" src={LinkedIn} /></a>
        <a href="https://angel.co/jamesgu"><img className="icon" alt="" src={AngelList} /></a>
        <a href="https://www.instagram.com/jamesguu/"><img className="icon" alt="" src={Instagram} /></a>
      </div>      
    </div>

    <div>
      <div className="about">  
        <div className="about-left">
          <img className="profile" src={JamesGu} alt="James Gu" />
        </div>
        
        <div className="about-right">
          <p>Full stack software engineer who loves to create.</p>
          <p>Love learning new things and finding the intersection between creativity and software.
Graduated from The University of Texas at Austin with a BBA in Finance and a certificate in Elements of Computing (web development, databases, data structures).</p>
        </div>

      </div>
    </div>
  </div>
);

export default Home;