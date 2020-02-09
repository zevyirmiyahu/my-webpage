import React, { Component } from 'react';

import { Container } from '@material-ui/core';


export default class AboutSection extends Component {

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

    TechSkillSectionHeader = () => {
        return <p style={styles.techText}><span style={{ fontWeight: '500' }}>Tech Stack:</span></p>   
    }

    TechSkillSection = () => {
        return(
            <div>
                <p style={styles.techText}>
                    <span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native<br/>
                    <span style={{ fontWeight: '500' }}>Back-End Frameworks: </span>Spring, Spring Boot<br/>
                    <span style={{ fontWeight: '500' }}>Languages: </span>Java, C#, C/C++, Ruby, SML, R, MatLab, JavaScript, TypeScript, Oracle SQL<br/>
                    <span style={{ fontWeight: '500' }}>Java Technologies: </span>JDBC, JUnit, Swing, Servlets, Tomcat<br/>
                    <span style={{ fontWeight: '500' }}>React Native Technologies: </span>Redux, React Redux, React Camera, React Navigation, React Native Navigation<br/>
                    <span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native<br/>
                    <span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native<br/>


                
                </p>
                <p style={styles.techText}><span style={{ fontWeight: '500' }}>Front-End Frameworks: </span>Angular, React Native</p>
            </div>
            
        );
    }

    Divider = () => {
        return (<hr style={{borderWidth: 1, borderColor: '#21ed9f'}}></hr>);
    }

    render() {
        return (
            <div>
                <this.Header />
                <Container maxWidth="lg">
                    <this.Subheader />
                    <this.About/>
                    <this.Divider/>
                    <this.TechSkillSectionHeader/>
                    <Container maxWidth='lg'>
                        <this.TechSkillSection/>
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