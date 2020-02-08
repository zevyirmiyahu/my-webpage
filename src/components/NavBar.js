import React, { Component } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';


class NavBar extends Component {
    render() {
        return (
            <AppBar position='static' style={styles.navBarContainer}>
                <Toolbar>

                    <p style={styles.headerText}>Zev <b>Yirmiyahu</b></p>

                    <div style={styles.buttonGroup}>
                        <Button style={styles.button}>About</Button>
                        <Button style={styles.button}>Projects</Button>
                        <Button style={styles.button}>Contact</Button>
                    </div>

                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;

const styles = {
    navBarContainer: {
        backgroundColor: '#21ed9f' // mint green
    },
    headerText: {
        fontSize: 24,
        color: '#282c34', // dark grey
    },
    button: {
        fontSize: 18,
        color: '#282c34' // dark grey
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: '5%',
    }
}
