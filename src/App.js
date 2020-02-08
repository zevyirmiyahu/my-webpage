import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
export default function App() {
  return (

    <div>
      <NavBar />
      <Header/>
      <div style={styles.container}>
        <h1>hey</h1>
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: calc(10px + 2vmin);
    color: 'white',
  }
}