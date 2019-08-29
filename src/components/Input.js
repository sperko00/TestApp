import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" };
    }
    handleTextChange = (e) => {
        this.setState({ inputValue: e.target.value }, this.props.setTextValue(e.target.value));

    }
    render() {
        return (
            <input type="text" value={this.state.inputValue} onChange={this.handleTextChange}></input>
        );
    }
}

export default Input;