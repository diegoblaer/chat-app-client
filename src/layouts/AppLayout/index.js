import React from 'react';
import "./styles.scss"

export const AppLayout = props => {
  return (
    <div className="app-layout-wrapper">
        {props.children}
        <div className="author">
            by <a href="https://github.com/diegoblaer?tab=repositories" target="_blank" rel="noopener noreferrer">@diegoblaer</a>
        </div>
    </div>
  );
}