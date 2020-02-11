import React, { Component } from 'react';
import * as COLOR from '../../constants/Colors';
import { Container } from '@material-ui/core';

import * as ICON from '../../constants/Icons';

export default class ContactSection extends Component {

    IconGroup1 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ICON.CPU />
                <div style={{ marginLeft: 'auto' }}>
                    <ICON.MONITOR />
                </div>
            </div>
        );
    }


    IconGroup2 = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ICON.MOUSE />
                <div style={{ marginLeft: 'auto' }}>
                    <ICON.KEYBOARD />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <Container style={styles.innerContainer} maxWidth='md'>
                    <this.IconGroup1 />
                    <div style={{ textAlign: 'center'}}>
                        <h1>Contact</h1>
                        <p>Got Questions? Feel free to reach out! </p>
                    </div>
                    <this.IconGroup2 />
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
        minHeight: '96vh',
        // paddingTop: 40,
        // paddingBottom: 20,
        justifyContent: 'center',
        color: COLOR.DARK_GREY,
    },
    innerContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 8,
    }
};
