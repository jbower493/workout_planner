import React from 'react';

const Register = (props) => {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <input type="text" placeholder="username" onChange={e => props.updateRegisterUsername(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => props.updateRegisterPassword(e.target.value)} />
      <button onClick={props.handleRegister}>Send</button>
    </div>
  )
};

export default Register;