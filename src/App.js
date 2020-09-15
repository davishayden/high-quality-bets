//import React from 'react';
import logo from './HQB_Title_Logo.svg';
import insta_icon from './Instagram_Icon.svg';
import twitter_icon from './Twitter_Icon.svg';
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createBets } from './graphql/mutations'
import { listBetss } from './graphql/queries'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from './Home'
import Login from './Login';

import './App.css';
import './simple-grid.css'
import awsExports from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

const initialState = { name: '', type: '', return: 0, risk: 0, outcome: false }

//const App = () => {
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <div className='row'>
                                <div className="col-1">
                                    <div className="row">
                                        <div className="col-12">
                                            <img src={logo} className="App-logo" alt="logo"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10">
                                </div>
                                <div className="col-1">
                                    <div className="Social-logo-stack">
                                        <a
                                            className="App-link"
                                            href="https://www.instagram.com/highqualitybets/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={insta_icon} className="Social-logo" alt="logo"/>
                                        </a>
                                        <a
                                            className="App-link"
                                            href="https://www.twitter.com/highqualitybets/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={twitter_icon} className="Social-logo" alt="logo"/>
                                        </a>
                                    </div>
                                </div>
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route exact path="/login">
                                        <Login />
                                    </Route>
                                </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;


/*
                <input
                    onChange={event => setInput('name', event.target.value)}
                    style={styles.input}
                    value={formState.name}
                    placeholder="Name"
                />
                <input
                    onChange={event => setInput('type', event.target.value)}
                    style={styles.input}
                    value={formState.type}
                    placeholder="Type"
                />
                <button style={styles.button} onClick={addBet}>Create Bet</button>
 */

/*
function App() {
  return (
    <div className="App">
      <div className="App-header">
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
      </div>
    </div>
  );
} */

