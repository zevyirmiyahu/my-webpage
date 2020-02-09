import React, { Component } from 'react';
import * as COLOR from '../../constants/Colors';
import { Container } from '@material-ui/core';


const TEXT_COLOR = COLOR.MINT_GREEN;

export default class ProjectSection extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Container maxWidth='lg'>
                    <p style={styles.subheaderText}>Projects</p>
                    <p style={styles.subheaderText}>Tech Stack</p>
                    
                    <Container maxWidth='md'>
                        Skills go here
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
    }

};