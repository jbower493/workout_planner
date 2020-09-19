import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Home from './Pages/Home.js';
import Page1 from './Pages/Page1.js';
import Page2 from './Pages/Page2.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const url = 'http://localhost:4500';


const App = () => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({ username: 'Nobody logged in' });
  const [isLoading, setIsLoading] = useState(true);

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
        if(res.data.user) {
          setUser(res.data.user);
        }
      });
  };

  const logout = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/logout`
    })
      .then(res => {
        console.log(res.data);
        setUser({ username: 'Nobody logged in' });
      })
  };

  useEffect(() => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        console.log(res.data);
        if(res.data.user) {
          setUser(res.data.user);
        } else {
          setUser({ username: 'Nobody logged in' });
        }
        setIsLoading(false);
      })
  }, []);

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <div>
        <header>
          <h1>Workout Planner</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home 
              handleLogin={login}
              updateLoginUsername={setLoginUsername}
              updateLoginPassword={setLoginPassword}
              handleRegister={register}
              updateRegisterUsername={setRegisterUsername}
              updateRegisterPassword={setRegisterPassword}
              handleLogout={logout}
              user={user} />
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
