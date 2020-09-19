import React from 'react';

const Login = (props) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="text" placeholder="username" onChange={e => props.updateLoginUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => props.updateLoginPassword(e.target.value)} />
      <button onClick={props.handleLogin}>Send</button>
    </div>
  )
};

export default Login;