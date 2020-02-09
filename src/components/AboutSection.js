import React, { Component } from 'react';

import { Container, Button, Avatar } from '@material-ui/core';

import * as COLOR from '../constants/Colors';
import ProfileImage from '../assets/desert-cover.jpg';


export default class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false, // show tech skills
            techButtonText: 'Show Skills'
        }
    }

    // used to space buttons
    spaceBlock = () => {
        return <div style={{ padding: 50 }}></div>
    }

    Header = () => {
        return <p style={styles.headerText}> {`<Code is law .../>`} </p>
    }

    Subheader = () => {
        return <p style={styles.subheaderText}>About</p>
    }

    About = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar alt='Zev' src={ProfileImage} style={{ marginTop: 50, width: 150, height: 150 }} />
                <div style={{ paddingLeft: 20 }}>
                    <this.Subheader />
                    <p style={styles.aboutText}>
                        Greetings, I'm a <span style={{ fontWeight: '300' }}>full stack developer</span> with experience building large scale
                        mobile applications in React Native, as well as experience developing microservice
                        applications.
                     </p>
                </div>
            </div>
        );
    }


    showTechOnClick = () => {
        if (!this.state.show) {
            this.setState({
                show: !this.state.show,
                techButtonText: 'Hide Skills'
            });
        }
        else {
            this.setState({
                show: !this.state.show,
                techButtonText: 'Show Skills'
            });
        }
    }

    showEduOnClick = () => {

    }

    // Button determines whether skils are shown
    ShowTechSkillsButton = () => {
        return (
            <Button
                style={{ backgroundColor: COLOR.MINT_GREEN }}
                onClick={this.showTechOnClick}
            >
                {this.state.techButtonText}
            </Button>
        );
    }

      // Button determines whether skils are shown
      ShowEducationButton = () => {
        return (
            <Button
                style={{ backgroundColor: COLOR.MINT_GREEN }}
                onClick={this.showEduOnClick}
            >
                Show Education
            </Button>
        );
    }

    MadeWith = () => {
        return (
            <div style={styles.madeWith}>
                <p>Built with ReactJS</p>
            </div>
        );
    }

    TechSkillSectionHeader = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={styles.techText}>
                    <span style={{ fontWeight: '500', paddingRight: 15 }}>Tech Stack:</span>
                    <this.ShowTechSkillsButton />
                </p>

                <this.spaceBlock />

                <p style={styles.techText}>
                    <span style={{ fontWeight: '500', paddingRight: 15 }}>Education:</span>
                    <this.ShowEducationButton />
                </p>

                <this.MadeWith />

            </div>
        );
    }

    TechSkillSection = () => {
        if (this.state.show) {
            return (
                <div>
                    <p style={styles.techText}>
                        <span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native<br />
                        <span style={{ fontWeight: '500' }}>Back-End Frameworks: </span>Spring, Spring Boot<br />
                        <span style={{ fontWeight: '500' }}>Languages: </span>Java, C#, C/C++, Ruby, SML, R, MatLab, JavaScript, TypeScript, Oracle SQL<br />
                        <span style={{ fontWeight: '500' }}>Java Technologies: </span>JDBC, JUnit, Swing, Servlets, Tomcat<br />
                        <span style={{ fontWeight: '500' }}>JavaScript Technologies: </span>ReactJS, Axios<br />
                        <span style={{ fontWeight: '500' }}>UI Libraries: </span>BootStrap, Material UI<br />

                        <span style={{ fontWeight: '500' }}>React Native Technologies: </span>Redux, React Redux, React Camera, React Navigation, React Native Navigation<br />
                        <span style={{ fontWeight: '500' }}>Operating Systems: </span>Windows, Linux, macOS<br />
                        <span style={{ fontWeight: '500' }}>Cloud Computing: </span>AWS (AMI, EC2, S3)<br />
                        <span style={{ fontWeight: '500' }}>Web Services: </span>Rest, SOAP<br />
                        <span style={{ fontWeight: '500' }}>Development Tools: </span>Spring Tool Suite, Eclipse, Visual Studio, Visual Studio Code, Xcode, Android Studio, Oracle Developer<br />
                        <span style={{ fontWeight: '500' }}>Testing Tools: </span>JUnit<br />
                        <span style={{ fontWeight: '500' }}>Build Tools: </span>Maven<br />
                        <span style={{ fontWeight: '500' }}>Collaboration Tools: </span>Zoom, Slack<br />
                        <span style={{ fontWeight: '500' }}>Development Enviroment: </span>Agile<br />
                        <span style={{ fontWeight: '500' }}>Project Management Tools: </span>Jira<br />
                        <span style={{ fontWeight: '500' }}>Version Control: </span>Git, GitHub<br />
                    </p>
                </div>
            );
        }
        else return null;
    }


    EducationSection = () => {
        return (
            <div>

            </div>
        );
    }

    Divider = () => {
        return (<hr style={{ borderWidth: 1, borderColor: COLOR.MINT_GREEN }}></hr>);
    }

    render() {
        return (
            <div>
                <this.Header />
                <Container maxWidth="lg">
                    <this.About />
                    <this.Divider />
                    <this.TechSkillSectionHeader />
                    <Container maxWidth='lg'>
                        <this.TechSkillSection />
                    </Container>

                </Container>

            </div>
        );
    }
}

const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '200',
        color: 'white'
    },
    subheaderText: {
        fontSize: 35,
        fontWeight: '300',
        color: 'white'
    },
    aboutText: {
        fontSize: 30,
        fontWeight: '200',
        color: 'white'
    },
    techText: {
        fontSize: 20,
        fontWeight: '200',
        color: 'white'
    },
    madeWith: {
        fontSize: 20,
        fontWeight: '200',
        display: 'flex',
        marginLeft: 'auto',
        color: COLOR.MINT_GREEN
    }
}