import React, { Component } from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

class NavBar extends Component {

    // used to space buttons
    spaceButtonBlock = () => {
        return <div style={{ padding: 20 }}></div>
    }

    // used to space icons and font inside buttons
    spaceIconBlock = () => {
        return  <div style={{ padding: 5 }}></div>
    }

    render() {
        return (
            <AppBar position='static' style={styles.navBarContainer}>
                <Toolbar>

                    <p style={styles.headerText}>Zev <b>Yirmiyahu</b></p>

                    <div style={styles.buttonGroup}>
                        <Button style={styles.button} >About</Button>
                        <this.spaceButtonBlock />
                        <Button style={styles.button}>Projects</Button>
                        <this.spaceButtonBlock />
                        <Button style={styles.button}>Contact</Button>
                    </div>

                    <div style={styles.buttonGroup2}>
                        <Button style={styles.button2}><GitHubIcon/><this.spaceIconBlock/>GitHub</Button>
                        <this.spaceButtonBlock/>
                        <Button style={styles.button2}><LinkedInIcon/><this.spaceIconBlock/>LinkedIn</Button>
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
        // margin: '15%',
        fontSize: 16,
        color: '#282c34' // dark grey
    },
    buttonGroup: {
        marginLeft: '5%',
        marginTop: '0.4%',
        display: 'flex',
        flexDirection: 'row',
    },
    button2: {
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 5,
        color: '#21ed9f', // mint green
        backgroundColor: '#282c34' // dark grey
    },
    buttonGroup2: {
        marginLeft: '5%',
        marginTop: '0.4%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: '5%',
    },
    icon: {
        width: 30,
        height: 30,
        color: '#282c34' // dark grey
    }
}
