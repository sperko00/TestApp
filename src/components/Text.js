import React from 'react';
const Text = props => {
    return (
        <p style={{ color: props.color, visibility: props.isVisible ? "visible" : "hidden" }}>{props.text}</p>
    )
};

export default Text;