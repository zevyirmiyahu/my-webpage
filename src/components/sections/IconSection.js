import React, { Component } from 'react';
import {
    Container,
} from '@material-ui/core';
import posed from 'react-pose';

import * as COLOR from '../../constants/Colors';
import * as ICON from '../../constants/Icons';


const Box = posed.div({
    hoverable: true,
    // draggable: 'x',
    // dragBounds: { left: '0%', right: '1020%' },
    init: { scale: 1 },
    hover: { scale: 1.6 },
    drag: { scale: 1.1 },
});

export default class componentName extends Component {

    IconGroup = () => {
        return (
            <Container maxWidth='md'>
                                <h1 style={{color: 'black'}}>Tech Stack at a Glance</h1>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={styles.box}>
                        <ICON.ANGULAR />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.REACT />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.REDUX />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.BOOTSTRAP />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.TYPESCRIPT />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.JAVASCRIPT />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.HTML />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.CSS />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.JAVA />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.TOMCAT />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.CSHAP />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.C />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.CPP />
                    </Box>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={styles.box}>
                        <ICON.WINDOWS />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.MAC />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.LINUX />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.YARN />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.NPM />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.ORACLE />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.AWS />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.DOCKER />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.GIT />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.GITHUB />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.VIM />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.VS />
                    </Box>
                    <Box style={styles.box}>
                        <ICON.SLACK />
                    </Box>
                </div>
            </Container>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <this.IconGroup />
            </div>

        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        // minHeight: '96vh',
        paddingTop: 20,
        paddingBottom: 20,
        // justifyContent: 'center',
        color: 'white',
    },
    box: {
        borderRadius: 10,
        backgroundColor: 'white'
    }
}
