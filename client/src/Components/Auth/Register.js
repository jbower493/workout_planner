import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { register, showLogin } from '../../redux/actions/authActions';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    props.register({ username, password });
  };

  let button;
  if(props.fetching) {
    button = <Spinner size="sm" color="secondary" />
  } else {
    button = <Button color="primary" className="auth-button" onClick={register} >Register</Button>
  }

  if(props.form === 'register') {
    return (
      <Form>
        <h2>Register</h2>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        {button}
        <p className="toggle-auth text-primary mt-2" onClick={props.showLogin} >Login</p>
      </Form>
    )
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  form: state.auth.form,
  loading: state.auth.loading
});

//const mapDispatchToProps = { register };

export default connect(mapStateToProps, { register, showLogin })(Register);