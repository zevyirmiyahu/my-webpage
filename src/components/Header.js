import React, { Component } from 'react';

import { Container, Grid } from '@material-ui/core';
import CoverPhoto from '../assets/desert-cover.jpg';

export default class Header extends Component {

    header = () => {
        return (
            <div style={styles.headerContainer}>
                <h1 style={styles.headerText}>Code is law... </h1>
            </div>
        );
    }

    CoverImage = () => {
        return (
            <div style={styles.image}>
                <img src={CoverPhoto} alt='Desert-Photo' />
            </div>
        );
    }

    render() {
        return (
            <div>
                <this.CoverImage />
                <Container style={{ paddingBottom: '34%' }} maxWidth='md'>

                    <this.header />

                </Container>

            </div>
        );
    }
}

const styles = {
    image: {
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    headerContainer: {
        paddingTop: '10%'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60
    }
}