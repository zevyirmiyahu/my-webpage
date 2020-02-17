import React, { Component } from 'react';

import {
    Container,
    Avatar,
    Grid
} from '@material-ui/core';
import styled from 'styled-components';
import ReactRotatingText from 'react-rotating-text';
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
        this.state = {}
    }

    // used to space buttons
    spaceBlock = () => {
        return <div style={{ padding: 50 }}></div>
    }

    Header = () => {
        return <AnimatedText style={styles.headerText} items={['<Code is Law ... />']} />
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
                <div style={{ paddingLeft: 20 }}>
                    <p style={styles.aboutText}>
                        Greetings, I'm a <span style={{ fontWeight: '300' }}>full stack developer</span> with experience building large scale
                        mobile applications in React Native, as well as experience developing microservice
                        applications.
                    </p>
                </div>
            </div>
        );
    }

    Divider = () => {
        return (<hr style={{ borderWidth: 1, borderColor: COLOR.MINT_GREEN }}></hr>);
    }

    CoverPhoto = () => {
        return (
            <img
                style={{ position: 'absolute', right: 200, width: 420, height: 569 }}
                alt='astronaut'
                src={require('../../assets/Cartoons.png')}
            />
        );
    }

    render() {
        return (
            <div>
                <this.CoverPhoto />
                <div style={styles.container}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <this.Header />
                            </Grid>
                            <Grid item xs={2}>
                                <this.ProfileImage />
                            </Grid>
                            <Grid item xs={5}>
                                <this.About />
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <div style={{paddingBottom: 80}}></div>
                        <this.Divider />
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
        background: 'radial-gradient(#21ed9f, #14c9b7)',
        minHeight: '50vh',
        paddingTop: 80,
        paddingBottom: 50,
        color: 'white',
    },
    headerText: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        fontSize: 70,
        fontWeight: '700',
        color: TEXT_COLOR
    },
    aboutText: {
        position: 'relative',
        zIndex: 2,
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