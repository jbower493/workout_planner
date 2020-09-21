import React, { useState } from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    props.login(username, password);
  };

  return (
    <div className="login-form auth-form">
      <h2>Login</h2>
      <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login} >Send</button>
      <p className="toggle-auth" onClick={props.toggleAuth} >Register</p>
    </div>
  )
};

export default Login;