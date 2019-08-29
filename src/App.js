import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Text from './components/Text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

  }
  setTextValue = (text) => {
    this.setState({ text })
  }
  render() {
    return (
      <div className="app">
        <Input setTextValue={this.setTextValue}></Input>
        <Text text={this.state.text}></Text>
      </div>
    );
  }
}

export default App;