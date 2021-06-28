import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  handleIncreaseCount = (m) => {
    m.preventDefault();
    this.setState({count: this.state.count + 1})
  }
  handleDecreaseCount = (f) => {
    f.preventDefault();
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <div>
        <h1>ClassCounter: {this.state.count}</h1>
        <hr/>
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default ClassCounter;


