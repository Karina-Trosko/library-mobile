import React, { Component } from 'react';

import Application from './combo/Application';

export default class App extends Component {
    componentDidMount() {
        // SplashScreen.hide();
    }

    render() {
        return (
               <Application />
        );
    }
}