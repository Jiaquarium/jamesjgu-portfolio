import React from 'react';
import NewsgateMain from '../assets/img/newsgate-main.png';
import NewsgateThemes from '../assets/img/newsgate-themes.png';
import Github from '../assets/img/github-512.png';

const Project2 = () => (
  <div className="App">
    
    <div className="title-container">
      <h2>Newsgate</h2>
    </div>
    
    <div className="github-container">  
      <a href="https://github.com/james-gu/newsgate">
        <img className="github" alt="" src={Github} />
      </a>
    </div>

    <div>
      <img className="image" alt="" src={NewsgateMain} />
    </div>

    <div className="description">
      <p>
        Chrome extension giving people the power to verify websites and links seamlessly as they are browsing the web. Fake news sites will have a banner appear on the webpage that describes what category of "fake" the site falls under (i.e. fake, satire, biased). Fake links will be highlighted on the DOM. Settings such as the color of highlighting of fake links and disabling the extension can be configured in the popup menu/settings.
      </p>
    </div>

    <div className="description">
      <p>
        Designed listener/emitter architecture to dynamically render DOM, resulting in real-time site and link verification. Maintained state through Chrome Storage API to persist user settings and in-app customizations. Displayed states using Angular’s two-way data binding to seamlessly update frontend views for user feedback.
      </p>
    </div>

    <h2>Additional Media</h2>
    <div>
      <img className="image" alt="" src={NewsgateThemes} />
    </div>
  </div>
);

export default Project2;