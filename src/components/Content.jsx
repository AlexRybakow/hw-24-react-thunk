import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Input from '../pages/Add-user/InputBox/Input';
import Users from '../pages/Add-user/Users/Users';


function Content() {
    return (
        <main className='main-block'>
        <Switch>
          <Route path='/hw-24-redux-thunk/' exact>
          <Home/>
          </Route>
          <Route path='/hw-24-redux-thunk/add-user'>
          <Input/>
          </Route>
          <Route path='/hw-24-redux-thunk/users'>
          <Users/>
          </Route>
        </Switch>
      </main>
    )
}

export default Content;

