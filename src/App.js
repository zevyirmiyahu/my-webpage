import React from 'react';

import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';
import * as COLOR from './constants/Colors';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';


export default function App() {
  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        {/* <CurrentView /> */}
        <AboutSection/>
        <ProjectSection/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: COLOR.MINT_GREEN,
    minHeight: '96vh',
    justifyContent: 'center',
    color: 'white',
  }
}