import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    props.login({ username, password });
  };

  const toggleAuth = () => {
    console.log(props.user, props.fetching, props.authstate)
  };

  let button;
  if(props.fetching) {
    button = <Spinner size="sm" color="secondary" />
  } else {
    button = <Button className="auth-button" onClick={login} >Login</Button>
  }

  return (
    <Form>
      <h2>Login</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      {button}
      <p className="toggle-auth text-primary mt-2" onClick={toggleAuth} >Register</p>
    </Form>
  )
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authstate: state.auth.authstate,
  fetching: state.auth.fetching
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);