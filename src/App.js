import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import CurrentView from './components/CurrentView';
import * as COLOR from './constants/Colors';
import NavBar from './components/NavBar';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectSection';
import IconSection from './components/sections/IconSection';
import TechSection from './components/sections/TechSection';
import ContactSection from './components/sections/ContactSection';

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
          <ContactSection />
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
    // backgroundImage: `url(${background})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '80%, 90%',
    minHeight: '96vh',
    justifyContent: 'center',
    color: 'white',
  }
}