import React, { useState, useEffect } from 'react';
import { AppLayout } from "../../layouts";
import { ChatContent, Sidebar } from "../../components";
import { useHistory } from "react-router-dom";
import io  from 'socket.io-client';
import qs from 'query-string'
import "./styles.scss"

const socket = io(process.env.REACT_APP_SERVER_URL)

export function Chat(props) {
    const history = useHistory()
    const user = qs.parse(props.location.search)
    const [users, setUsers] = useState([])
    const [newMessage, setNewMessage] = useState(null);
    const [messages, setMessages] = useState([])
    console.log(process.env.REACT_APP_SERVER_URL)


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
    

    return (
        <AppLayout>
            <div className="chat">

                <Sidebar users={users} />

                <ChatContent messages={messages} socket={socket} />
                
            </div>
        </AppLayout>    
    );
}