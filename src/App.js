import React from 'react';

import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';
import * as COLOR from './constants/Colors';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import IconSection from './components/sections/IconSection';
import TechSection from './components/sections/TechSection';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App() {
  return (
    <ParallaxProvider>
      <div>
        <NavBar />
        <div style={styles.container}>
          {/* <CurrentView /> */}
          <AboutSection />
          <ProjectSection />
          <IconSection />
          <TechSection />
        </div>
      </div>
    </ParallaxProvider>
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