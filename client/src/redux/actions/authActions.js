import { GET_USER, LOGIN, REGISTER, LOGOUT } from './types';
import Axios from 'axios';

import { url } from '../../App';

const getUserAC = (user) => {
  return {
    type: GET_USER,
    user
  }
};

export const getUser = () => {
  return (dispatch) => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-user`
    })
      .then(res => {
        dispatch(getUserAC(res.data.user));
      })
      .catch(e => {
        console.log(e);
        dispatch(getUserAC(undefined));
      })
  };
};

const loginAC = (user) => {
  return {
    type: LOGIN,
    user
  }
};

export const login = (credentials) => {
  return dispatch => {
    Axios({
      method: 'post',
      url: `${url}/login`,
      withCredentials: true,
      data: credentials,
      headers: {'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch(loginAC(res.data.user));
      })
      .catch(e => {
        console.log(e);
        dispatch(loginAC(undefined));
      })
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