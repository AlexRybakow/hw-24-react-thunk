import {createStore } from 'redux';
import CoachAvatar from './components/assets/the-coach.jpg';
import MickeyPhoto from './components/assets/mickey.jpg';
import RayPhoto from './components/assets/raymond.jpg';
import FletcherPhoto from './components/assets/fletcher.jpg';
import RosalindPhoto from './components/assets/rosalind.jpg';
import DryEyePhoto from './components/assets/dry-eye.jpg';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const users = [
    {
        name: 'Mickey Pearson',
        photo: MickeyPhoto,
        nickname: '@theboss'
    },
    {
        name: 'Raymond Smith',
        photo: RayPhoto,
        nickname: '@Raymond_S'
    },
    {
        name: 'The Coach',
        photo: CoachAvatar,
        nickname: '@I_am_the_coach',
    },
    
    {
        name: 'Fletcher',
        photo: FletcherPhoto,
        nickname: '@Fletchermundo'
    },
    
    {
        name: 'Rosalind Pearson',
        photo: RosalindPhoto,
        nickname: '@Rosalind'
    },
    
    {
        name: 'Dry Eye',
        photo: DryEyePhoto,
        nickname: '@Dry-eye'
    }
]

const initialView = {
   users: []
}

const reducer = (state = initialView, action) => {
 switch(action.type) {
     case 'add-user':
         return {
             ...state,
             users
         };
         case 'new-user':
             return {
                 ...state,
                 users: [...state.users,action.payload]
             };
             default: 
             return state;
 }

}

export const showUsers = () => (
    {
        type: 'add-user'
    }
) 

export const createUser = (user) => async (dispatch, getState) => {
    try{
        const addUser = await fetch('http://domer.tech:9999/users',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        
        const responce = await addUser.json();

    }catch(error){
        console.log("User was not added")
    }
    dispatch({
        type: 'new-user',
        payload: user
    }
)
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;

