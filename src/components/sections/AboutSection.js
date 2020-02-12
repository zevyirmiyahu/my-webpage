import React, { Component } from 'react';

import {
    Container,
    Button,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Paper
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typist from 'react-typist';
import styled from 'styled-components';
import ReactRotatingText from 'react-rotating-text';
import AwesomeSlider from 'react-awesome-slider';
import ParticlesBg from 'particles-bg'
import posed from 'react-pose';

import * as COLOR from '../../constants/Colors';
import ProfileImage from '../../assets/desert-cover.jpg';


const TEXT_COLOR = COLOR.DARK_GREY;

const Box = posed.div({
    hoverable: true,
    // draggable: 'x',
    // dragBounds: { left: '0%', right: '1020%' },
    init: { scale: 1 },
    hover: { scale: 1.3 },
    drag: { scale: 1.1 },
});

const AnimatedText = styled(ReactRotatingText)`
.react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
}
   
@keyframes blinking-cursor {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
`

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
        return (
            <AnimatedText style={styles.headerText} items={['<Code is Law ... />']} />
            // <ReactRotatingText style={styles.headerText} items={['<Code is Law ... />']} />
            // <Typist
            //     avgTypingDelay={200}
            //     show={true}
            //     blink={true}
            //     element='|'
            // >
            //     <p style={styles.headerText}> {`<Code is law ... />`} </p>
            // </Typist>
        );
    }

    Subheader = () => {
        return (<h1 style={{ color: COLOR.DARK_GREY }}>About</h1>);
    }

    ProfileImage = () => {
        return (
            <Box>
                <Avatar alt='Zev' src={ProfileImage} style={{ marginTop: 50, width: 150, height: 150 }} />
            </Box>
        );
    }


    About = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <this.ProfileImage />
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

    BackgroundCover = () => {
        return (
            <ParticlesBg type="circle" bg={true} />
            // <particles-bg type="random" bg="true" />
        //    <div style={{position: 'absolute', zIndex: 0, backgroundColor: 'pink', minHeight: '50vh', minWidth: '90vh'}}></div>
        );
    }


    render() {
        return (
            <div style={styles.container}>
                <this.Header />
                <Container maxWidth="lg">
                    <this.About />
                    <this.Divider />
                    {/* <this.TechSkillSectionHeader />
                    <Container maxWidth='lg'>
                    <this.TechSkillSection />
                </Container> */}
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
        backgroundColor: COLOR.MINT_GREEN,
        minHeight: '50vh',
        paddingTop: 80,
        paddingBottom: 50,
        // justifyContent: 'center',
        color: 'white',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 70,
        fontWeight: '700',
        color: TEXT_COLOR
    },
    subheaderText: {
        fontSize: 35,
        fontWeight: '300',
        color: TEXT_COLOR
    },
    aboutText: {
        paddingBottom: 80,
        fontSize: 30,
        fontWeight: '200',
        color: TEXT_COLOR
    },
    techText: {
        fontSize: 20,
        fontWeight: '200',
        color: TEXT_COLOR
    }
}