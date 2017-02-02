import React from 'react';
import drawing1 from '../assets/img/art-img/1.jpg';
import drawing2 from '../assets/img/art-img/2.jpg';
import drawing3 from '../assets/img/art-img/3.jpg';
import drawing4 from '../assets/img/art-img/4.jpg';
import drawing5 from '../assets/img/art-img/5.jpg';
import drawing6 from '../assets/img/art-img/6.jpg';
import drawing7 from '../assets/img/art-img/7.jpg';
import drawing8 from '../assets/img/art-img/8.jpg';

const Arts = () => (
  <div className="App">
    <div>
      <h2>Art</h2>
      <h4>2011-2015</h4>
      <div>
        <img className="image" alt="" src={drawing2} />
      </div>
      <div>
        <img className="image" alt="" src={drawing1} />
      </div>
      <div>
        <img className="image" alt="" src={drawing3} />
      </div>
      <div>
        <img className="image" alt="" src={drawing4} />
      </div>
      <div>
        <img className="image" alt="" src={drawing5} />
      </div>
      <div>
        <img className="image" alt="" src={drawing6} />
      </div>
      <div>
        <img className="image" alt="" src={drawing7} />
      </div>
      <div>
        <img className="image" alt="" src={drawing8} />
      </div>
    </div>
  </div>
);

export default Arts;