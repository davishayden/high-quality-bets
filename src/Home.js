
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
//import { createBets } from './graphql/mutations'
import { listBetss } from './graphql/queries'

import './App.css';
import './simple-grid.css'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', type: '', return: 0, risk: 0, outcome: false }

const Home = () => {
        const [formState, setFormState] = useState(initialState)
        const [bets, setBets] = useState([])
        useEffect(() => {
            fetchBets()
        }, [])

        function setInput(key, value) {
            setFormState({...formState, [key]: value})
        }

        async function fetchBets() {
            try {
                const betsData = await API.graphql(graphqlOperation(listBetss))
                const bets = betsData.data.listBetss.items
                console.log(bets)
                setBets(bets)
            } catch (err) {
                console.log('error fetching todos')
            }
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-4'>
                        <div style={styles.container}>
                            <table>
                                <tr className="table-header">
                                    <th>Bet</th>
                                    <th>Type</th>
                                    <th>Outcome</th>
                                </tr>
                                {
                                    bets.map((bet, index) => (
                                        <tr className='table-row' key={bet.id ? bet.id : index}>
                                            <td>{bet.name}</td>
                                            <td>{bet.type}</td>
                                            <td>{String(bet.outcome)}</td>
                                        </tr>
                                    ))
                                }
                                <tr>

                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className="row">
                            <div className='col-12'>
                                <iframe className='video-format' src="https://www.youtube.com/embed/omSxe8XRcsI"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

const styles = {
    // container: { width: 800, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    container: { margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 0 },

    bet: {  marginBottom: 1 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    betName: { fontSize: 20 },
    betType: { fontSize: 20 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
export default Home;