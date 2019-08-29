import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Text from './components/Text';
import Checkbox from './components/Checkbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      defaultColor: "#000",
      fetchedColor: null,
      textColor: '#000',
      isTextVisible: true,
    };

  }
  setTextValue = (text) => {
    this.setState({ text })
  }
  handleColorChange = () => {
    if (!this.state.fetchedColor) {
      alert("Another color not availible!")
      return;
    }
    if (this.state.textColor !== this.state.fetchedColor) {
      this.setState({ textColor: this.state.fetchedColor })
      return;
    }
    this.setState({ textColor: this.state.defaultColor });

  }
  changeVisibility = (value) => {
    this.setState({
      isTextVisible: !value,
    })
  }
  async componentDidMount() {
    fetch("http://www.colr.org/json/color/random").then(res => res.json()).then(data => this.setState({ fetchedColor: "#" + data.colors[0].hex })).catch(error => alert(error));
  }
  render() {
    return (
      <div className="app">
        <div className="text-input-section">
          <h1>Enter some text in text field!</h1>
          <Input setTextValue={this.setTextValue}></Input>
          <Text text={this.state.text} color={this.state.textColor} isVisible={this.state.isTextVisible}></Text>
        </div>
        <div className="change-color-section">
          <button onClick={this.handleColorChange}>Change text color</button>
        </div>
        <div className="change-visibility-section">
          <Checkbox label="Hide text" callback={this.changeVisibility}></Checkbox>
        </div>
      </div>
    );
  }
}

export default App;