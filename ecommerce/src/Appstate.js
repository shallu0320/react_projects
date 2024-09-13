
import React, { Component } from 'react';
import PropComponent from './components/propcomponent';
export default class App extends Component {
    state = {
        Name: "shalini",
        Subject: "Fullstackdevelopment"
    }
    render() {
        return (
            <div>
                I am {this.state.Name} I learn {this.state.Subject}
                <PropComponent />
            </div>
        );
    }
}