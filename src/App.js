import React from 'react';

import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';


export default function App() {
  return (
    <div style={styles.container}>
      <NavBar />
      <CurrentView />
    </div>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#282c34',
    minHeight: '100vh',
    justifyContent: 'center',
    color: 'white',
  }
}