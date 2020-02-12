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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as COLOR from '../../constants/Colors';


const TEXT_COLOR = 'white' //COLOR.MINT_GREEN;

export default class TechSection extends Component {


    TechSkills_Col1 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={styles.techCategory}>Front-End Frameworks: <span style={styles.technologiesText}>Angular, React Native</span></p>

                <p style={styles.techCategory}>Back-End Frameworks: <span style={styles.technologiesText}>Spring, Spring Boot</span></p>

                <p style={styles.techCategory}>Languages: <span style={styles.technologiesText}>Java, C#, C/C++, Ruby, SML, R, MatLab, JavaScript, TypeScript, Oracle SQL</span></p>

                <p style={styles.techCategory}>Java Technologies: <span style={styles.technologiesText}>JDBC, JUnit, Swing, Servlets, Tomcat</span></p>

                <p style={styles.techCategory}>JavaScript Technologies: <span style={styles.technologiesText}>ReactJS, Axios</span></p>

                <p style={styles.techCategory}>UI Libraries: <span style={styles.technologiesText}>BootStrap, Material UI</span></p>

                <p style={styles.techCategory}>React Native Technologies: <span style={styles.technologiesText}>Redux, React Redux, React Camera, React Navigation, React Native Navigation</span></p>

                <p style={styles.techCategory}>Operating Systems: <span style={styles.technologiesText}>Windows, Linux, macOS</span></p>
            </div>
        );
    }

    TechSkills_Col2 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={styles.techCategory}>Cloud Computing: <span style={styles.technologiesText}>AWS (AMI, EC2, S3)</span></p>

                <p style={styles.techCategory}>Web Services: <span style={styles.technologiesText}>Rest, SOAP</span></p>

                <p style={styles.techCategory}>Development Tools: <span style={styles.technologiesText}>Spring Tool Suite, Eclipse, Visual Studio, Visual Studio Code, Xcode, Android Studio, Oracle Developer</span></p>

                <p style={styles.techCategory}>Testing Tools: <span style={styles.technologiesText}>JUnit</span></p>

                <p style={styles.techCategory}>Build Tools: <span style={styles.technologiesText}>Maven</span></p>

                <p style={styles.techCategory}>Collaboration Tools: <span style={styles.technologiesText}>Zoom, Slack</span></p>

                <p style={styles.techCategory}>Development Enviroment: <span style={styles.technologiesText}>Agile</span></p>

                <p style={styles.techCategory}>Project Management Tools: <span style={styles.technologiesText}>Jira</span></p>

                <p style={styles.techCategory}>Version Control: <span style={styles.technologiesText}>Git, GitHub</span></p>
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

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Container maxWidth='lg'>
                        <h1 style={{color: TEXT_COLOR}}>Tech Stack</h1>
                        <Container maxWidth='md'>
                            <this.TechSkillsSection />
                        </Container>
                    </Container>
                </div>
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
        minHeight: '95vh',
        paddingTop: 20,
        color: 'white',
    },
    techCategory: {
        fontSize: 20,
        fontWeight: '500',
        color: COLOR.MINT_GREEN
    },
    technologiesText: {
        fontWeight: '250',
        color: 'white'
    }

};