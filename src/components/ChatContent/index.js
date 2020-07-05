import React, { useEffect, useState, useRef } from 'react';
import { SysMessage, UserMessage, Button } from "../index"
import { useForm } from "react-hook-form";
import "./styles.scss"

export const ChatContent = props => {

    const { handleSubmit, register, reset } = useForm();
    const lastMessageRef = useRef(null)
    const { messages, socket } = props;

    useEffect(() => {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });        
    }, [messages]);

    const renderChatMessages = () => {
        return messages.map((msg, index) => {                
            return msg.sys?
            <SysMessage key={index} message={msg.payload} /> :
            <UserMessage key={index} message={msg.payload} fromOther={msg.payload.author.id !== socket.id} />
        })        
    }

    const onSubmitMessage = data => {
        socket.emit('create-message', data.message)
        reset()
    };

    return (
        <div className="chat-content">

            <div className="chat-messages">
                { renderChatMessages() }
                <div ref={lastMessageRef} />
            </div>

            <div className="chat-actions">
                <form onSubmit={handleSubmit(onSubmitMessage)}>
                    <input type="text" placeholder="Type something..." name="message" autoComplete="off" ref={register({ required: true })}></input>
                    <Button text="Send" tiny />
                </form>                    
            </div>

        </div>
    );
}