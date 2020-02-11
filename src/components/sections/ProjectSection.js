import React, { Component } from 'react';
import {
    Container,
    Button,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Paper,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ParticleEffectButton from 'react-particle-effect-button'


import * as COLOR from '../../constants/Colors';


const TEXT_COLOR = COLOR.MINT_GREEN;
const GITHUB_PATH = 'https://zevyirmiyahu.github.io/';

export default class ProjectSection extends Component {
    state = {
        githubHidden: false // initiates GitHub button disintigration on true
    }

    TechSkills_Col1 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Back-End Frameworks: </span>Spring, Spring Boot</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Languages: </span>Java, C#, C/C++, Ruby, SML, R, MatLab, JavaScript, TypeScript, Oracle SQL</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Java Technologies: </span>JDBC, JUnit, Swing, Servlets, Tomcat</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>JavaScript Technologies: </span>ReactJS, Axios</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>UI Libraries: </span>BootStrap, Material UI</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>React Native Technologies: </span>Redux, React Redux, React Camera, React Navigation, React Native Navigation</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Operating Systems: </span>Windows, Linux, macOS</p>
            </div>
        );
    }

    TechSkills_Col2 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Cloud Computing: </span>AWS (AMI, EC2, S3)</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Web Services: </span>Rest, SOAP</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Development Tools: </span>Spring Tool Suite, Eclipse, Visual Studio, Visual Studio Code, Xcode, Android Studio, Oracle Developer</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Testing Tools: </span>JUnit</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Build Tools: </span>Maven</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Collaboration Tools: </span>Zoom, Slack</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Development Enviroment: </span>Agile</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Project Management Tools: </span>Jira</p>

                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Version Control: </span>Git, GitHub</p>
            </div>
        );
    }

    TechSkills = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <this.TechSkills_Col1 />
                <this.TechSkills_Col2 />
            </div>
        );
    }

    Divider = (left, right) => {
        return (
            <div>
                <hr style={{ marginLeft: left, marginRight: right, borderWidth: 1, borderColor: COLOR.MINT_GREEN }}></hr>
            </div>
        );
    }

    TechSkillsSection = () => {
        return (
            <div>
                <this.Divider marginLeft={'15%'} marginRight={'5%'} />
                <this.TechSkills />
                <this.Divider marginLeft={'5%'} marginRight={'5%'} />
            </div>
        );
    }

    ProjectDescription = () => {
        return (
            <div>
                <p style={styles.projectDescription}>I enjoy learning new programming languages, frameworks and libraries, whether it's front-end or back-end, I'm married to the game and I love her from head to toe.
                </p>
                <p style={styles.projectDescription}>My programming portfolio is hosted on GitHub <GitHubIcon style={{ color: 'white' }} />. It has everything from games written in pure Java to blockchains written in JavaScript, oh my! Enjoy.
                </p>
            </div>
        );
    }

    // used to space icons and font inside buttons
    spaceIconBlock = () => {
        return <div style={{ padding: 5 }}></div>
    }

    GitHubButton = () => {
        return (
            <ParticleEffectButton
                color={COLOR.MINT_GREEN}
                hidden={this.state.githubHidden}
            >
                <Button onClick={() => this.setState({ githubHidden: true })} style={styles.button}><GitHubIcon /><this.spaceIconBlock />GitHub</Button>
            </ParticleEffectButton>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <Container maxWidth='lg'>
                    <h1 style={{ color: 'white' }}>Projects</h1>
                    <Container maxWidth='md'>
                        <this.ProjectDescription />
                        <div style={{ textAlign: 'right' }}>
                            <this.GitHubButton />
                        </div>
                        <div style={{paddingTop: 40, paddingBottom: 80}}>

                        <hr />
                        </div>
                    </Container>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: COLOR.DARK_GREY,
        // minHeight: '96vh',
        paddingTop: 20,
        paddingBottom: 20,
        // justifyContent: 'center',
        color: 'white',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '200',
        color: 'TEXT_COLOR'
    },
    subheaderText: {
        fontSize: 35,
        fontWeight: '300',
        color: 'white'
    },
    techText: {
        fontSize: 20,
        fontWeight: '200',
        color: 'white'
    },
    projectDescription: {
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: '200',
        color: 'white'
    },
    button: {
        backgroundColor: COLOR.MINT_GREEN,
        padding: 20,
        fontSize: 16,
        // marginLeft: '5%',
        // marginTop: '0.4%',
        // display: 'flex',
        // flexDirection: 'row',
        // position: 'absolute',
        // right: '5%'  ,
    },
};