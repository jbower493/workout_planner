import { GET_USER, LOGIN, REGISTER, LOGOUT, REQUESTING_DATA, RECEIVED_DATA, SHOW_REGISTER, SHOW_LOGIN } from './types';
import Axios from 'axios';

import { url } from '../../App';

const requestingDataAC = () => {
  return { type: REQUESTING_DATA }
};

const receivedDataAC = () => {
  return { type: RECEIVED_DATA }
};

const showRegisterAC = () => {
  return { type: SHOW_REGISTER }
};

const showLoginAC = () => {
  return { type: SHOW_LOGIN }
};

const getUserAC = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
};

const loginAC = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
};

const registerAC = () => {
  return {
    type: REGISTER
  }
};

const logoutAC = () => {
  return {
    type: LOGOUT
  }
};

export const showRegister = () => {
  return (dispatch) => {
    dispatch(showRegisterAC());
  }
};

export const showLogin = () => {
  return (dispatch) => {
    dispatch(showLoginAC());
  }
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(requestingDataAC());
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        dispatch(getUserAC(res.data.user));
        dispatch(receivedDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(getUserAC(undefined));
        dispatch(receivedDataAC());
      })
  };
};

export const login = (credentials) => {
  return dispatch => {
    dispatch(requestingDataAC());
    Axios({
      method: 'post',
      url: `${url}/login`,
      withCredentials: true,
      data: credentials,
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(loginAC(res.data.user));
        dispatch(receivedDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(loginAC(undefined));
        dispatch(receivedDataAC());
      })
  }
};

export const register = (credentials) => {
  return dispatch => {
    dispatch(requestingDataAC());
    Axios({
      method: 'post',
      url: `${url}/register`,
      withCredentials: true,
      data: credentials,
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        if(res.data.message === 'New user created') {
          dispatch(registerAC());
          dispatch(showLoginAC());
        }
        dispatch(receivedDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedDataAC());
      })
  }
};

export const logout = () => {
  return dispatch => {
    dispatch(requestingDataAC());
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/logout`
    })
      .then(res => {
        if(res.data.message === 'Successfully logged out') {
          dispatch(logoutAC());
        }
        dispatch(receivedDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedDataAC());
      })
  }
};