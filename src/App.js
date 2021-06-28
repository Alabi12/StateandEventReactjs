import React, { Component } from 'react';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

class App extends Component {
  render() {
    return (
      <div>
        <ClassCounter />
        <FunctionCounter />
      </div>
    );
  }
}

export default App;

