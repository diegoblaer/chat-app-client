import React from 'react';
import "./styles.scss"

export const Message = props => {
    return (
        <div className={`message from-${props.from}`}>
            {props.children}
        </div>
    );
}