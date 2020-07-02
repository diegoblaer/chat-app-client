import React from 'react';
import { Avatar, Message } from "../index"
import "./styles.scss"

export const UserMessage = props => {

    const { message: { author, text, createdAt }, fromOther } = props;

    return (
        <Message from={fromOther? "other" : "me"}>
            <div className="message__author">
                <Avatar type={author.avatar} tiny />
                <span>{author.name}</span>
            </div>
            <div className="message__content">
                <p>{text}</p>
                <span>{createdAt}</span>
            </div>
        </Message>        
    );
}