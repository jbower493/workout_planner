import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    props.register(username, password);
  };

  return (
    <Form>
      <h2>Register</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button onClick={register} >Register</Button>
      <p className="toggle-auth text-primary mt-2" onClick={props.toggleAuth} >Login</p>
    </Form>
  )
};

export default Register;