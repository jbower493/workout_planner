import React, { useState } from 'react';
import './App.css';
//import Form from './Components/Form.js';
/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
*/
import Axios from 'axios';
import Page from './Components/Page.js';

const url = 'http://localhost:4500';

// this needs to be an api call to get the current user if any, so that the user can persist if page is refreshed
const currentUser = { username: 'Nobody logged in' };

const App = () => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState(currentUser);

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: `${url}/register`
    })
      .then(res => console.log(res));
  };

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: `${url}/login`
    })
      .then(res => {
        console.log(res);
        setUser(res.data.user);
      });
  };

  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        console.log(res.data)
      })
  };

  return (
    <div className="app">
      <h2>Register</h2>
      <input type="text" placeholder="username" onChange={e => setRegisterUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
      <button onClick={register}>Send</button>

      <h2>Login</h2>
      <input type="text" placeholder="username" onChange={e => setLoginUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
      <button onClick={login}>Send</button>

      <h2>Get logged in user</h2>
      <button onClick={getUser}>Get User</button>
      <div id="user"></div>

      <Page user={user} />
    </div>
  )
};

export default App;
