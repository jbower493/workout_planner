import React from 'react';
import Login from './Login.js';
import Register from './Register';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let form;
    if(this.props.form === 'register') {
      form = <Register
        register={this.props.register}
        toggleAuth={this.props.toggleAuth} />
    } else if(this.props.form === 'login') {
      form = <Login
        login={this.props.login}
        toggleAuth={this.props.toggleAuth} />
    } else {
      form = null;
    }

    return (
      form
    )
  }
};

export default AuthForm;