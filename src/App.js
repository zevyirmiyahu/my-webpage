import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Body from './components/Body';
import CoverImage from './components/CoverImage';
import Header from './components/Header';
import About from './components/About';
import VerticalSpace from './components/VerticalSpace';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function App() {
  return (
    <div>
      <NavBar />
      <Body />
    </div>


    // <div>
    //   <Grid container spacing={1}>

    //     <Grid item xs={12}>
    //       <NavBar />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <CoverImage />
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Header />
    //     </Grid>
    //   </Grid>

    //   <CoverImage />

    //   <About />

    //   <VerticalSpace />
    // </div>

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