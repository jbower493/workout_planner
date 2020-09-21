import React, { useState } from 'react';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    props.register(username, password);
  };

  return (
    <div className="register-form auth-form">
      <h2>Register</h2>
      <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register} >Send</button>
      <p className="toggle-auth" onClick={props.toggleAuth} >Login</p>
    </div>
  )
};

export default Register;