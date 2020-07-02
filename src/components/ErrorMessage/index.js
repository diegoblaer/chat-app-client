import React from 'react';
import "./styles.scss"

export const ErrorMessage = props => {

  return (
    <div className="error-message">
        {props.message}
    </div>
  );
}