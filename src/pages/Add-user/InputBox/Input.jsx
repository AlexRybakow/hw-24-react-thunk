import React from 'react';
import './input.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store' ;




const Input = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [photo, setPhoto] = useState();
    const [nickname, setNickname] = useState();
   

 const createNewUser = (event) => {
     event.preventDefault();
     dispatch(createUser({
    photo: photo,
    name: name,
    nickname: nickname,
     }));
     
     
 }

 
 return (
     <form className='user-form'>
         <div className="signup-page">
            <h2 className='form-title'>Registration</h2>
            <div className='user-info'>
            <input className='user-input' type="text" placeholder='Enter your name' onChange={event => setName(event.target.value)}/>
            <input className='user-input' type="text" placeholder='Enter your nickname (with @)'onChange={event => setNickname(event.target.value)}/>
            <input className='user-input' type="text" placeholder='Paste link to your photo'onChange={event => setPhoto(event.target.value)}/>
            </div>
            <button className='signup-button' onClick={createNewUser}>Sign Up</button>
        </div>
     </form>
 )
}

export default Input;
