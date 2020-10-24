import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './Components/AppNavbar';
import AuthForm from './Components/Auth/AuthForm';
import Content from './Components/Content/Content';

import { Container, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { getUser } from './redux/actions/authActions';


export const url = 'http://localhost:4500';
//export const url = 'https://jbwebsites.work/api';


class App extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let content;
    if(this.props.loading) {
      content = <div className="loading"><Spinner size="md" color="secondary" /></div>
    } else if(this.props.user) {
      content = <Content />;
    } else {
      content = <AuthForm />;
    }
    return (
      <div className="app">
        <AppNavbar className="nav" />
        <div className="body">
          <Container>
            {content}
          </Container>
        </div>
        <footer className="bg-dark">
          <div>Website designed and built by <a href="https://jbdev.netlify.app" target="_blank" rel="noopener noreferrer">Jamie Bower</a></div>
        </footer>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

//const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, { getUser })(App);
