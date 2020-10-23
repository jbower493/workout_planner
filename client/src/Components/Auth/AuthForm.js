import React from 'react';
import Login from './Login.js';
import Register from './Register';


const AuthForm = () => {
  return (
    <div className="auth-form">
      <Login />
      <Register />
    </div>
  )
};

export default AuthForm;