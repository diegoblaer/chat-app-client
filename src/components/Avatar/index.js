import React from 'react';
import "./styles.scss"
import classnames from "classnames"

export const Avatar = props => {

  
    const classes = classnames('avatar', props.type, {
        'hoverable': props.hoverable,
        'tiny': props.tiny,
        'small': props.small,
        'selected': props.selected,
        'connected': props.connected
    })

  return (
    <div className={ classes } onClick={props.onClick} data-type={props.type}></div>
  );
}