import React, { Component } from 'react';


export default class componentName extends Component {
  render() {
    return (
      <div style={styles.container}> textInComponent </div>
    );
  }
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
