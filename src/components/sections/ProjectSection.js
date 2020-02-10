import React, { Component } from 'react';
import {
    Container,
    Button,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as COLOR from '../../constants/Colors';
import * as ICON from '../../constants/Icons';


const TEXT_COLOR = COLOR.MINT_GREEN;

export default class ProjectSection extends Component {


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

    TechExpansionPanel = () => {
        return (
            <div style={{ position: 'absolute', zIndex: 2 }}>
                <Container maxWidth="xs">
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
              </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Container>
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

    IconGroup = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ICON.REACT />
                <ICON.ANGULAR />
                <ICON.JAVA />
                <ICON.CSHAP />
            </div>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <Container maxWidth='lg'>
                    <p style={styles.subheaderText}>Projects</p>
                    <p style={styles.subheaderText}>Tech Stack</p>

                    <Container maxWidth='md'>
                        <this.TechSkillsSection />
                        <this.IconGroup />
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
        paddingTop: 150,
        // justifyContent: 'center',
        color: 'white',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '200',
        color: TEXT_COLOR
    },
    subheaderText: {
        fontSize: 35,
        fontWeight: '300',
        color: TEXT_COLOR
    },
    techText: {
        fontSize: 20,
        fontWeight: '200',
        color: TEXT_COLOR
    },

};