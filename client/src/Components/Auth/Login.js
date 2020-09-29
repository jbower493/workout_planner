import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    props.login(username, password);
  };

  return (
    <Form>
      <h2>Login</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button className="auth-button" onClick={login} >Login</Button>
      <p className="toggle-auth text-primary mt-2" onClick={props.toggleAuth} >Register</p>
    </Form>
  )
};

export default Login;