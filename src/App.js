import React from 'react';
import logo from './HQB_Dice.svg';
import insta_icon from './Instagram_Icon.svg';
import twitter_icon from './Twitter_Icon.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-title">High Quality Bets</h1>
          <div className="Social-logo-stack">
        <a
          className="App-link"
          href="https://www.instagram.com/highqualitybets/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={insta_icon} className="Social-logo" alt="logo" />
        </a>
          <a
              className="App-link"
              href="https://www.twitter.com/highqualitybets/"
              target="_blank"
              rel="noopener noreferrer"
          >
              <img src={twitter_icon} className="Social-logo" alt="logo" />
          </a>
          </div>
      </header>
    </div>
  );
}

export default App;
