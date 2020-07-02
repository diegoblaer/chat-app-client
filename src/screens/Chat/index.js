import React, { useState, useEffect, useRef } from 'react';
import { AppLayout } from "../../layouts";
import { Button, Avatar, UserListItem, SysMessage, UserMessage } from "../../components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import io  from 'socket.io-client';
import qs from 'query-string'
import "./styles.scss"

const socket = io(process.env.REACT_APP_SERVER_URL)

export function Chat(props) {
    const history = useHistory()
    const lastMessageRef = useRef(null)
    const user = qs.parse(props.location.search)
    const [users, setUsers] = useState([])
    const [newMessage, setNewMessage] = useState(null);
    const [messages, setMessages] = useState([])
    const { handleSubmit, register, reset } = useForm();
    
    
    useEffect(() => {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });        
    }, [messages]);

    useEffect(() => {
        if(newMessage){
            setMessages([ ...messages, newMessage]);         
        }        
    }, [newMessage]);

    useEffect(() => {          
        socket.emit('join', user, error =>{
            if(error){
                return history.push('/')
            }            
        });   
        socket.on('user-message', payload => {
            setNewMessage({ sys: false, payload})
        });
    
        socket.on('sys-message', payload => {
            setNewMessage({ sys: true, payload})
        });
    
        socket.on('users-list-updated', payload => {
            setUsers(payload.users)
        });
                        
        return () => socket.disconnect();        
    }, []); 
    
    const onSubmitMessage = data => {
        socket.emit('create-message', data.message)
        reset()
    };

    const renderUsersList = () => {
        return(
            <ul>
                {users.map(user => <UserListItem key={user.id} user={user} />)}
            </ul>
        )
    }

    const renderChatMessages = () => {
        return messages.map((msg, index) => {                
            return msg.sys?
            <SysMessage key={index} message={msg.payload} /> :
            <UserMessage key={index} message={msg.payload} fromOther={msg.payload.author.id !== socket.id} />
        })        
    }

    return (
        <AppLayout>
            <div className="chat">

                <div className="sidebar">
                        <h1>CONNECTED USERS</h1>
                        { renderUsersList() }
                </div>

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
            </div>
        </AppLayout>    
    );
}