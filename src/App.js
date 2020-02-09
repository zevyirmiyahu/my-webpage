import React from 'react';

import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';


export default function App() {
  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <CurrentView />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#282c34',
    minHeight: '96vh',
    justifyContent: 'center',
    color: 'white',
  }
}