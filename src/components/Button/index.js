import React from 'react';
import "./styles.scss"
import classnames from "classnames"

export const Button = props => {
    const classes = classnames('button', {
        'tiny': props.tiny
    })

  return (
    <button className={ classes }>
        {props.text}
    </button>
  );
}