import React from 'react';
import { Avatar } from "../Avatar"
import "./styles.scss"

export const UserListItem = props => {

    const { name, age, avatar } = props.user;

    return (
        <li className="connected-user">
            <Avatar type={avatar} small connected />
            <div className="connected-user__info">{name}<span>({age})</span></div>
        </li>
    );
}