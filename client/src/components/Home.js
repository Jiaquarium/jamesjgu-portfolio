import React from 'react';
import JamesGu from '../james-gu.jpg';
import LinkedIn from '../linkedin.png';
import AngelList from '../angellist.png';
import Instagram from '../instagram.png';
import Github from '../github-512.png';

const Home = () => (
  <div className="App">
    <div>
      <h2>About Me</h2>
      <div className="about">  
        <div className="about-left">
          <img className="profile" src={JamesGu} alt="James Gu" />
        </div>
        
        <div className="about-right">
          <p>Full stack software engineer that loves to build;<br />graduate of The University of Texas at Austin</p>
          <p>Love learning new things, and find the intersection between creativity and software truly fascinating.
I graduated from The University of Texas at Austin with a BBA in Finance and a certificate in Elements of Computing (web development, databases, data structures).</p>

          <div className="icon-container">
            <a href="https://www.github.com/james-gu"><img className="icon" src={Github} /></a>
            <a href="https://www.linkedin.com/in/jamesgu1993"><img className="icon" src={LinkedIn} /></a>
            <a href="https://angel.co/jamesgu"><img className="icon" src={AngelList} /></a>
            <a href="https://www.instagram.com/jamesguu/"><img className="icon" src={Instagram} /></a>
          </div>
        
        </div>


      </div>
    </div>
  </div>
);

export default Home;