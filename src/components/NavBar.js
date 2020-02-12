import React, { Component } from 'react';

import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import SkyLight from 'react-skylight';
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
        return <div style={{ padding: 5 }}></div>
    }

    LanguageDivider = () => {
        return (
            <p style={{
                fontSize: 20,
                fontWeight: '500',
                color: COLOR.DARK_GREY,
                paddingBottom: 5
            }}>|</p>
        );
    }

    LanguageIcon = () => {
        return (
            <TranslateIcon style={{
                color: COLOR.DARK_GREY,
                paddingTop: 21,
                paddingRight: 5,
            }} />
        );
    }

    ResumeModal = () => {
        return (
            <div style={styles.resumeModal} >
                <SkyLight
                    ref={ref => this.animated = ref}
                    hideOnOverlayClicked
                    transitionDuration={1000}
                >
                    <div style={{ textAlign: 'center' }}>
                        <h1>Zev's Resume</h1>
                    </div>
                </SkyLight>
            </div >
        );
    }

    render() {
        return (
            <AppBar position='sticky' style={styles.navBarContainer}>
                <Toolbar>

                    <p style={styles.headerText}>Zev <b>Yirmiyahu</b></p>

                    <this.ResumeModal />

                    <div style={styles.buttonGroup}>
                        <Button style={styles.button} >About</Button>
                        <this.spaceButtonBlock />
                        <Button style={styles.button}>Projects</Button>
                        <this.spaceButtonBlock />
                        <Button style={styles.button} onClick={() => this.animated.show()}>Resume</Button>
                        <this.spaceButtonBlock />
                        <Button style={styles.button}>Contact</Button>
                    </div>

                    <div style={styles.buttonGroup2}>
                        <this.LanguageIcon />
                        <Button style={styles.button}>English</Button>
                        <this.LanguageDivider />
                        <Button style={styles.button}>Deutsch</Button>

                        {/* <Button style={styles.button2} href={GITHUB_PATH}><GitHubIcon/><this.spaceIconBlock/>GitHub</Button>
                        <this.spaceButtonBlock/>
                        <Button style={styles.button2} href={LINKEDIN_PATH}><LinkedInIcon/><this.spaceIconBlock/>LinkedIn</Button>
                        <this.spaceButtonBlock/>
                        <Button style={styles.button2}><DescriptionIcon/><this.spaceIconBlock/>Resume</Button>  */}
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
    },
    resumeModal: {
        color: COLOR.DARK_GREY,
        backgroundColor: COLOR.MINT_GREEN,
    }
}
