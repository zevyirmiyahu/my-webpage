import React, { Component } from 'react';

import { Container } from '@material-ui/core';

export default class Header extends Component {

    header = () => {
        return (
            <div style={styles.headerContainer}>
                <h1 style={styles.headerText}>Code is law... </h1>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Container maxWidth='md'>
                    <this.header />
                </Container>

            </div>
        );
    }
}

const styles = {
    headerContainer: {
        paddingTop: '10%'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60,
        color: '#282c34' // dark grey
    }
}