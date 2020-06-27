import React from 'react';
import { AppLayout } from "../../layouts";
import { Button, Avatar } from "../../components";
import "./styles.scss"


export const Chat = props => {
  return (
    <AppLayout>
      <div className="chat">
          <div className="sidebar">
                <h1>CONNECTED USERS</h1>
                <ul>
                    <li className="connected-user">
                        <Avatar type="granjero" small connected />
                        <div className="connected-user__info">Diego Blaer<span>(26)</span></div>
                    </li>
                    <li className="connected-user">
                        <Avatar type="azafata" small connected />
                        <div className="connected-user__info">Gasti Carmona<span>(26)</span></div>
                    </li>
                    <li className="connected-user">
                        <Avatar type="camarero" small connected />
                        <div className="connected-user__info">Manu Belfi<span>(26)</span></div>
                    </li>
                    <li className="connected-user">
                        <Avatar type="astronauta" small connected />
                        <div className="connected-user__info">Gino Iannuzzi<span>(26)</span></div>
                    </li>
                    <li className="connected-user">
                        <Avatar type="empleado" small connected />
                        <div className="connected-user__info">Chino Krawiec<span>(26)</span></div>
                    </li>
                    <li className="connected-user">
                        <Avatar type="fotografo" small connected />
                        <div className="connected-user__info">Bruno Giannaula<span>(26)</span></div>
                    </li>
                </ul>
          </div>



          <div className="chat-content">


                <div className="chat-messages">


                    <div className="message from-other">
                        <div className="message__author">
                            <Avatar type="azafata" tiny />
                            <span>Gasti Carmona</span>
                        </div>
                        <div className="message__content">
                            <p>alguno quiere un budin?</p>
                            <span>11:54</span>
                        </div>
                    </div>

                    <div className="message from-me">
                        <div className="message__author">
                            <Avatar type="granjero" tiny />
                            <span>Diego Blaer</span>
                        </div>
                        <div className="message__content">
                            <p>yo no</p>
                            <span>11:54</span>
                        </div>
                    </div>

                    <div className="message from-sys">
                        <div>
                            <Avatar type="fotografo" tiny />
                            <span>Bruno Giannaula has joined the chat</span>
                        </div>                        
                    </div>

                    <div className="message from-other">
                        <div className="message__author">
                            <Avatar type="camarero" tiny />
                            <span>Manu Belfi</span>
                        </div>
                        <div className="message__content">
                            <p>Lo malo que es sarri</p>
                            <span>11:54</span>
                        </div>
                    </div>



                </div>


                <div className="chat-actions">
                    <form>
                        <input type="text" placeholder="Type something..." name="message" autoComplete="off"></input>
                        <Button text="Send" tiny />
                    </form>                    
                </div>


          </div>
      </div>
    </AppLayout>    
  );
}