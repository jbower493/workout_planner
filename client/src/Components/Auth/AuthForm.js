import React from 'react';
import Login from './Login.js';
import Register from './Register';

/*
class AuthForm extends React.Component {
  render() {
    let form;
    if(this.props.form === 'register') {
      form = <Register
        register={this.props.register}
        toggleAuth={this.props.toggleAuth}
        fetching={this.props.fetching} />
    } else if(this.props.form === 'login') {
      form = <Login
        login={this.props.login}
        toggleAuth={this.props.toggleAuth}
        fetching={this.props.fetching} />
    } else {
      form = null;
    }

    return (
      form
    )
  }
};*/

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
        <Register />
    </div>
    )
  }
};

export default AuthForm;