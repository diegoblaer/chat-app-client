import React from 'react';
import { Avatar, Message } from "../index"
import "./styles.scss"

export const SysMessage = props => {

    const { author, text } = props.message;

    return (
        <Message from="sys">
            <div>
                <Avatar type={author.avatar} tiny />
                <span>{text}</span>
            </div> 
        </Message>      
    );
}