import React, { Component } from 'react'

export default class App extends Component {
    state =
    {
        name: "Shalini" ,
        subject: "FullStackDevelopment"
    }
  render() {
    return (
      <div>
        I am {this.state.name} Shalini Student {this.state.subject}
      </div>
    )
  }
}
