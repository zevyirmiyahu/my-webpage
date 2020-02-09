import React, { Component } from 'react';
import AboutSection from './AboutSection';



export default class CurrentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            About: true, // home
            Projects: false,
            Contact: false
        }
    }
    // Controls which view to return based on users selection
    SwitchBodyViews = () => {
        if (this.state.About) {
            return (
                <AboutSection/>
            );
            }
        else if (this.state.Projects) {

        }
        else if (this.state.Contact) {

        }
    }
    render() {
        return (
            <this.SwitchBodyViews />
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#282c34',
        minHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // fontSize: calc(10px + 2vmin);
        color: 'white',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60,
        color: '#282c34' // dark grey
    }
}
