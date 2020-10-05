import React from 'react';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './Components/AppNavbar';
import AuthForm from './Components/Auth/AuthForm';
import Content from './Components/Content/Content';

import { Container, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { getUser } from './redux/actions/authActions';


export const url = 'http://localhost:4500';
//export const url = 'https://jbwebsites.work/api';

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
      form: 'login',
      fetching: false
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleAuth = this.toggleAuth.bind(this);
  }

  componentDidMount() {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        console.log(res.data)
        if(res.data.user) {
          this.setState({
            user: res.data.user
          })
        }
        this.setState({ loading: false });
      })
  }

  login(username, password) {
    this.setState({ fetching: true });
    Axios({
      method: 'post',
      url: `${url}/login`,
      withCredentials: true,
      data: {
        username,
        password
      },
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log(res.data)
        if(res.data.user) {
          this.setState({ user: res.data.user });
        }
        this.setState({ fetching: false });
      })
  }

  register(username, password) {
    this.setState({ fetching: true });
    Axios({
      method: 'post',
      url: `${url}/register`,
      withCredentials: true,
      data: {
        username,
        password
      },
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log(res.data)
        if(res.data.message === 'New user created') {
          this.setState({ form: 'login' });
        }
        this.setState({ fetching: false });
      })
  }

  logout() {
    this.setState({ fetching: true });
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/logout`
    })
      .then(res => {
        console.log(res.data)
        if(res.data.message === 'Successfully logged out') {
          this.setState({ user: null });
        }
        this.setState({ fetching: false });
      })
  }

  toggleAuth() {
    this.state.form === 'login' ? this.setState({ form: 'register' }) : this.setState({ form: 'login' });
  }

  render() {
    let content;
    if(this.state.loading) {
      content = <div className="loading"><Spinner size="md" color="secondary" /></div>
    } else if(this.state.user) {
      content = <Content user={this.state.user} />;
    } else {
      content = <AuthForm
        form={this.state.form}
        toggleAuth={this.toggleAuth}
        login={this.login}
        register={this.register}
        fetching={this.state.fetching} />;
    }
    return (
      <div className="app">
        <AppNavbar
          user={this.state.user}
          logout={this.logout}
          fetching={this.state.fetching} />
        <Container>
          {content}
        </Container>
      </div>
    )
  }
};*/

class App extends React.Component {
  componentDidMount() {
    this.props.getUser();
    console.log(this.props.user);
  }

  render() {
    return (
      <div className="app">
        <Container>
          {this.props.user ? <h1>{this.props.user.username}</h1> : <h1>undefined</h1>}
          <hr/>
          <AuthForm />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
