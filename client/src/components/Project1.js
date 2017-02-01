import React from 'react';
import QupidMain from '../qupid-main.png';
import QupidLogin from '../qupid-login.png';
import QupidMyCoupons from '../qupid-mycoupons.png';
import QupidQR from '../qupid-qr.png';
import Github from '../github-512.png';

const Project1 = () => (
  <div className="App">
    <div className="title-container">
      <h2>Qupid</h2>
    </div>
    
    <div className="github-container">  
      <a href="https://github.com/james-gu/qupid">
        <img className="github" alt="" src={Github} />
      </a>
    </div>

    <div>
      <img className="image" alt="" src={QupidMain} />
    </div>

    <div className="description">
      <p>
        IoT marketing platform allows business owners to dynamically interact with customers through iBeacons and a React Native-built iOS app. Customers receive coupons upon entering the vicinity of a bluetooth-signal-emitting iBeacon. Coupon metadata including activation time can be customized through a business portal. Coupons are redeemed in real-time through a uniquely-generated QR code and an iOS scanner app.
      </p>
    </div>

    <div className="description">
      <p>
        Architected frontend structure using React Native for iOS mobile client and ReactJS for web app; used Redux for state management. Leveraged Universal JavaScript concepts for high performance rendering. Handled image uploads by building microservice to store images with Google Cloud Platform. Enabled live mobile-to-mobile scanning of unique QR codes with Socket.IO. Deployed MySQL database using Google's Cloud SQL and deployed internal APIs using Docker containers and AWS. Developed worker to periodically update database to keep coupons refreshed.
      </p>
    </div>

    <h2>Additional Media</h2>
    <div className="container">
      <a><img className="mobile-image" alt="" src={QupidLogin} /></a>
      <a><img className="mobile-image" alt="" src={QupidMyCoupons} /></a>
      <a><img className="mobile-image" alt="" src={QupidQR} /></a>
      <span className="stretch"></span>
    </div>
  </div>
);

export default Project1;