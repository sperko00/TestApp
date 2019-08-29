import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" };
    }
    handleTextChange = (e) => {
        this.setState({ inputValue: e.target.value }, this.props.callback(e.target.value));

    }
    render() {
        return (
            <input className="input-field" type="text" value={this.state.inputValue} onChange={this.handleTextChange}></input>
        );
    }
}

export default Input;