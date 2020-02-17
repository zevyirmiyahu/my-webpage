import React, { Component } from 'react';

import { AppBar, Toolbar, Button, Divider } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import SkyLight from 'react-skylight';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

import * as COLOR from '../constants/Colors';
import resume_part1_path from '../assets/resume/Resume_Part1.svg';
import resume_part2_path from '../assets/resume/Resume_Part2.svg';


const GITHUB_PATH = 'https://zevyirmiyahu.github.io/';
const LINKEDIN_PATH = '';

const CustomButton = styled(Button)`
    color: #000;
    font-size: 16px;
    color: #282c34;
    :hover {
        color: #21ed9f;
    }
`

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false // for button style changes
        }
    }

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
                    <div style={styles.innerModalSection}>
                        <h1>Zev's Resume</h1>
                        <img alt="Resume Part1 SVG" src={resume_part1_path} />
                        <img alt="Resume Part2 SVG" src={resume_part2_path} />
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
                        <CustomButton href='#about'>About</CustomButton>
                        <this.spaceButtonBlock />
                        <CustomButton href='#projects'>Projects</CustomButton>
                        <this.spaceButtonBlock />
                        <CustomButton onClick={() => this.animated.show()}>Resume</CustomButton>
                        <this.spaceButtonBlock />
                        <CustomButton href='#contact'>Contact</CustomButton>
                    </div>

                    <div style={styles.buttonGroup2}>
                        <this.LanguageIcon />
                        <CustomButton>English</CustomButton>
                        <this.LanguageDivider />
                        <CustomButton>German</CustomButton>

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
        color: COLOR.DARK_GREY,
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
    },
    innerModalSection: {
        textAlign: 'center',
        height: 500,
        overflow: 'scroll'
    }
}
