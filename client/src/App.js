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

const url = 'http://localhost:4500';

const App = () => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = () => {
    fetch(`${url}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  const login = () => {
    fetch(`${url}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  const getUser = () => {
    fetch(`${url}/get-user`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('user').innerText = data.user;
    })
    .catch(e => console.log(e));
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
    </div>
  )
};

export default App;
