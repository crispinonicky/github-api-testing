import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  // all info on a repo
  // axios.get('https://api.github.com/repos/Orange-You-Glad-I-didn-t-say-banana/javascript-mars-rover-v2')

  // collaborators URL (REQUIRES AUTH): 
  // axios.get('https://api.github.com/repos/Orange-You-Glad-I-didn-t-say-banana/javascript-mars-rover-v2/collaborators')

  // all events on the repo
  // axios.get('https://api.github.com/repos/Orange-You-Glad-I-didn-t-say-banana/javascript-mars-rover-v2/events')

  // info on all contributors (including NUMBER of contributions)
  axios.get('https://api.github.com/repos/Orange-You-Glad-I-didn-t-say-banana/javascript-mars-rover-v2/contributors')

  .then(res => {
    let contributors = res.data

    console.log(contributors)

    contributors.forEach((x,i)=> {
      console.log(x.login, 'has made', x.contributions, 'contributions')
    })
    
  })
  .catch(err => {
    console.log(err)
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
