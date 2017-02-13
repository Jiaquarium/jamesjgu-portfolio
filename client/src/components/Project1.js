import React from 'react';
import QupidOverview from '../assets/img/overview.png';
import QupidLogin from '../assets/img/qupid-login.png';
import QupidMyCoupons from '../assets/img/qupid-mycoupons.png';
import QupidQR from '../assets/img/qupid-qr.png';
import Github from '../assets/img/github-512.png';
import FetchCoupon from '../assets/img/fetchCoupon.gif';
import Scan from '../assets/img/scan.gif';
import Nav from '../assets/img/nav.gif';
import Sort from '../assets/img/sort.gif';

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
      <img className="image" alt="" src={QupidOverview} />
    </div>

    <div className="description">
      <p>
        Qupid is an IoT-based mobile marketing platform that rethinks the way businesses interact with consumers and reinvigorates the in-store purchasing experience.
      </p>
    </div>

    <div className="description">
      <p>
        Qupid integrates iBeacon technology with an iOS native app and web app to provide a B2C solution that distributes advertisements/coupons to shoppers in real-time, based on their vicinity to the beacons. Business owners are provided data-driven statistics regarding consumer trends while bargain-hunters are rewarded with curated coupons by their favorite brick-and-mortar stores.
      </p>
    </div>

    <div className="description">
      <p>
        The business portal for coupon creation/beacon registration can be found here:
      </p>
      <a className="web-link" href="http://www.qupid.biz">
        www.qupid.biz
      </a>
    </div>

    <h2>A Few iOS Features...</h2>

    <h4>Live Location-Aware Advertising (User) and QR Scanning Functionality (Business)</h4>
    <div className="container">
      <img className="gif1" alt="" src={FetchCoupon} />
      <img className="gif2" alt="" src={Scan} />
    </div>

    <h4>Navigation and Sorting (User)</h4>
    <div className="container">
      <img className="gif1" alt="" src={Nav} />
      <img className="gif2" alt="" src={Sort} />
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