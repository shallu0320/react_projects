import React, { Component } from 'react';

export default class MyClassComponent1 extends Component {
  state = {
    sname: 'Shruthi'
  };

  render() {
    return (
      <div>
        {this.state.sname}
      </div>
    );
  }
}


