import React, { Component } from 'react';
import * as COLOR from '../../constants/Colors';
import { Container } from '@material-ui/core';

export default class ProjectSection extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Container>
                    <p>TEsting</p>
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
        minHeight: '96vh',
        justifyContent: 'center',
        color: 'white',
    }
};