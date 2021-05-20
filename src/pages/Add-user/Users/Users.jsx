import React from 'react';
import './users.css';
import { useSelector } from 'react-redux';

const Users = (props) => {
    const users = useSelector((state => state.users))
    return (
        <>
        {users.map((user) => (
        <div className='user-container' key={user.username}>
        <div className='user-avatar'><img src={user.photo} alt='avatar'></img>       
        </div>
        <div className='user-block'>
        <div className='user-info'>
        <p className='user-name'>{user.name}</p>
        <p className='user-nickname'>{user.nickname}</p>   
        </div>
        </div>
        </div>
        )) }
        </>
    )
}

export default Users;