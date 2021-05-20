import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{
    to:'/hw-24-redux-thunk/',
    label:'Home'
},
{
    to:'/hw-24-redux-thunk/add-user',
    label:'Add user'
},
{
    to:'/hw-24-redux-thunk/users',
    label:'Users'
},
]

const NavBar = () => (
    <nav className="navigation">
        <ul className="flex">
            {links.map(link => (
               <li className="navigation-item" key={link.to}>
                   <NavLink exact to={link.to}>{link.label}</NavLink>
               </li> 
            ))}
        </ul>
    </nav>
)

export default NavBar;