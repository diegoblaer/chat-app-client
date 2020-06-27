import React from 'react';
import { AppLayout } from "../../layouts";
import { Button, Avatar } from "../../components";
import constants from "../../utils/constants"
import "./styles.scss"


export const Login = props => {

  const renderAvatars = () => {
    return constants.avatars.map(av => <Avatar type={av} hoverable /> )
  }

  return (
    <AppLayout>
      <div className="login">
          <h1>Welcome to <span>ChatApp</span></h1>
          <form className="login-form">
            <div className="login-form__field">
              <input type="text" name="name" placeholder="Name" autoComplete="off"></input>
              <label for="name">Name</label>
            </div> 
            <div className="login-form__field">
              <input type="text" name="age" placeholder="Age" autoComplete="off"></input>
              <label for="age">Age</label>
            </div>            
            <div className="login-form__avatar">
              <h5>Select an avatar</h5>
              <div className="avatars">
                  { renderAvatars() }
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Button text="Login" />
            </div>
          </form>
      </div>
    </AppLayout>    
  );
}