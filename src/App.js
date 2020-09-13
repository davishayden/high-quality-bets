//import React from 'react';
import logo from './HQB_Title_Logo.svg';
import insta_icon from './Instagram_Icon.svg';
import twitter_icon from './Twitter_Icon.svg';
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createBets } from './graphql/mutations'
import { listBetss } from './graphql/queries'

import './App.css';
import './simple-grid.css'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', type: '' }

const App = () => {
    const [formState, setFormState] = useState(initialState)
    const [bets, setBets] = useState([])

    useEffect(() => {
        fetchBets()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchBets() {
        try {
            const betsData = await API.graphql(graphqlOperation(listBetss))
            const bets = betsData.data.listBetss.items
            console.log(bets)
            setBets(bets)
        } catch (err) { console.log('error fetching todos') }
    }

    async function addBet() {
        try {
            if (!formState.name || !formState.type) return
            const bet = { ...formState }
            console.log(bet)
            setBets([...bets, bet])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createBets, {input: bet}))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
            <div className="App">

                <div className="App-header">
                    <div className='container'>
                    <div className="row">
                        <div className="col-1">
                            <div className="row">
                                <div className="col-10">
                                    <img src={logo} className="App-logo" alt="logo" />
                                </div>
                            </div>

                        </div>

                        <div className="col-9"></div>
                        <div className="col-1  hidden-sm">

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
                    </div>
                </div>
            <h2>Bets Taken</h2>

                <div style={styles.container} >
                    <table  >
                        <tr className="table-header">
                            <th>Bet</th>
                            <th className='hidden-sm'>Type</th>
                            <th>Result</th>
                        </tr>
                        {
                            bets.map((bet, index) => (
                            <tr key={bet.id ? bet.id : index}>
                                <td className='hidden-sm'>{bet.name}</td>
                                <td>{bet.type}</td>
                                <td>win</td>
                            </tr>
                            ))
                        }
                    </table>

                </div>
            </div>

    )
}

const styles = {
    container: { width: 800, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    bet: {  marginBottom: 20 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    betName: { fontSize: 20 },
    betType: { fontSize: 20 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}



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

export default App;
