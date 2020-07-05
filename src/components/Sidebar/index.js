import React from 'react';
import { UserListItem } from "../index"
import "./styles.scss"
import { Link } from 'react-router-dom';

export const Sidebar = props => {

    const { users } = props;

    const renderUsersList = () => {
        return(
            <ul>
                {users.map(user => <UserListItem key={user.id} user={user} />)}
                <li>
                    <Link to="/" className="add-user" target="_blank">
                        <i class="fa fa-plus"></i>
                        <span>Add new user</span>
                    </Link>
                </li>
            </ul>
        )
    }

    return (
        <div className="sidebar">
            <h1>CONNECTED USERS</h1>
            { renderUsersList() }
        </div>
    );
}