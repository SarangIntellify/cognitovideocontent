import React from 'react';
import LoginForm from './AuthenticationComponents/LoginForm';
import { Switch, Route } from 'react-router-dom';
import LoginFormTwo from './AuthenticationComponents/LoginFormTwo';
import FinalPage from './AuthenticationComponents/FinalPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/login' component={LoginFormTwo} />
        <Route exact path='/welcome' component={FinalPage} />
      </Switch>

    </div>
  )
}

