import React, { Component } from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

import * as COLOR from '../constants/Colors';

const GITHUB_PATH = 'https://zevyirmiyahu.github.io/';
const LINKEDIN_PATH = '';

class NavBar extends Component {

    // used to space buttons
    spaceButtonBlock = () => {
        return <div style={{ padding: 10 }}></div>
    }

    // used to space icons and font inside buttons
    spaceIconBlock = () => {
        return  <div style={{ padding: 5 }}></div>
    }

    render() {
        return (
            <AppBar position='sticky' style={styles.navBarContainer}>
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
                        <Button style={styles.button2} href={GITHUB_PATH}><GitHubIcon/><this.spaceIconBlock/>GitHub</Button>
                        <this.spaceButtonBlock/>
                        <Button style={styles.button2} href={LINKEDIN_PATH}><LinkedInIcon/><this.spaceIconBlock/>LinkedIn</Button>
                        <this.spaceButtonBlock/>
                        <Button style={styles.button2}><DescriptionIcon/><this.spaceIconBlock/>Resume</Button> 
                    </div>

                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;

const styles = {
    navBarContainer: {
        backgroundColor: 'white', //COLOR.MINT_GREEN
    },
    headerText: {
        fontSize: 24,
        color: COLOR.DARK_GREY 
    },
    button: {
        // margin: '15%',
        fontSize: 16,
        color: COLOR.DARK_GREY 
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
        color: COLOR.MINT_GREEN,
        backgroundColor: COLOR.DARK_GREY 
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
        color: COLOR.DARK_GREY 
    }
}
