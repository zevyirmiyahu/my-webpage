import React, { Component } from 'react';

import { Container, Button } from '@material-ui/core';

import * as COLOR from '../constants/Colors';


export default class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false, // show tech skills
        }
    }

    Header = () => {
        return <p style={styles.headerText}> {`<Code is law .../>`} </p>
    }

    Subheader = () => {
        return <p style={styles.subheaderText}>About</p>
    }

    About = () => {
        return (
            <p style={styles.aboutText}>
                Greetings, I'm a <span style={{ fontWeight: '400' }}>full stack developer</span> with experience building large scale
                mobile applications in React Native, as well as experience developing microservice
                applications.
            </p>
        );
    }


    showOnClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    ShowButton = () => {
        return (
            <Button style={{ backgroundColor: COLOR.MINT_GREEN }}
                onClick={this.showOnClick}
            >Show Skills</Button>
        );
    }

    TechSkillSectionHeader = () => {
        return (
            <p style={styles.techText}>
                <span style={{ fontWeight: '500', paddingRight: 15 }}>Tech Stack:</span>
                <this.ShowButton />
            </p>
        );
    }

    TechSkillSection = () => {
        if(this.state.show) {

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

    Divider = () => {
        return (<hr style={{ borderWidth: 1, borderColor: COLOR.MINT_GREEN }}></hr>);
    }

    render() {
        return (
            <div>
                <this.Header />
                <Container maxWidth="lg">
                    <this.Subheader />
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
        fontWeight: '100',
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
    }
}