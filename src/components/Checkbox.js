import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked ? this.props.checked : false,
        }
    }
    handleChange = () => {
        let value = !this.state.checked;
        this.setState({
            checked: value,
        }, this.props.callback(value));
    }
    render() {
        const { disabled, label } = this.props;
        const { checked } = this.state;
        return (
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={this.handleChange}
                />
                <span className="checkbox-label">{label}</span>
            </label>
        );
    }
}

export default Checkbox;