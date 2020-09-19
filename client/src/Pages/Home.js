import React from 'react';
import Login from '../Components/Login.js';
import Register from '../Components/Register.js';
import GetUser from '../Components/GetUser.js';
import Logout from '../Components/Logout.js';

const Home = (props) => {
  return (
    <div>

      <Login
        handleLogin={props.handleLogin}
        updateLoginUsername={props.updateLoginUsername}
        updateLoginPassword={props.updateLoginPassword} />

      <Register
        handleRegister={props.handleRegister}
        updateRegisterUsername={props.updateRegisterUsername}
        updateRegisterPassword={props.updateRegisterPassword} />

      <Logout handleLogout={props.handleLogout} />

      <GetUser user={props.user} />

    </div>
  )
};

export default Home;