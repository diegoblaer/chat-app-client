import React, { useState } from 'react';
import { AppLayout } from "../../layouts";
import { Button, Avatar, ErrorMessage } from "../../components";
import { useHistory} from "react-router-dom";
import { AVATARS } from "../../utils/constants"
import { useForm } from "react-hook-form";
import qs from 'query-string'

import "./styles.scss"


export const Login = props => {
  let history = useHistory()
  const [selectedAvatar, setSelectedAvatar] = useState('')
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const queryString = qs.stringify(data)
    history.push({ pathname: '/chat', search: queryString })
  };

  const renderAvatars = () => {
    return AVATARS.map(av => 
      <Avatar 
        key={av} 
        type={av} 
        hoverable 
        onClick={onAvatarSelected} 
        selected={av === selectedAvatar} 
      /> 
    )
  }

  const onAvatarSelected = e => {
    const avatarType = e.target.getAttribute('data-type')
    setSelectedAvatar(avatarType)
  }

  return (
    <AppLayout>
      <div className="login">
          <h1>Welcome to <span>ChatApp</span></h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form__field">
              <input type="text" name="name" placeholder="Name" autoComplete="off" ref={register({ required: true })}></input>
              <label htmlFor="name">Name</label>
            </div> 

            <div className="login-form__field">
              <input type="text" name="age" placeholder="Age" autoComplete="off"  ref={register({ required: true, pattern: /^[1-9]\d*$/ })}></input>
              <label htmlFor="age">Age</label>
            </div>                  
               
            <div className="login-form__avatar">
              <h5>Select an avatar</h5>
              <div className="avatars">
                  { renderAvatars() }
              </div>
            </div>

            <input type="hidden" name="avatar" value={selectedAvatar} ref={register({ required: true })} />

            <div className="login-form__submit-container">
              <Button text="Login" />
            </div>

            <div className="login-form__errors">          
              {errors.name?.type === "required" && <ErrorMessage message="Name is required" />}    
              {errors.age?.type === "required" && <ErrorMessage message="Age is required" /> }   
              {errors.age?.type === "pattern" && <ErrorMessage message="Invalid age" /> }
              {errors.avatar?.type === "required" && <ErrorMessage message="Avatar is required" /> }  
            </div>            

          </form>
      </div>
    </AppLayout>    
  );
}