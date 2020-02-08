import React, { Component } from "react";
import { Container } from '@material-ui/core';


export default class About extends Component {

    render() {
        return (
            <Container maxWidth='md'>
                <h1>About</h1>
                <p>Information about myself...</p>
            </Container>
        );
    }
}