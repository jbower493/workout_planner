import { GET_USER, LOGIN, REGISTER, LOGOUT, REQUESTING_DATA } from '../actions/types';

const initialState = {
  user: null,
  authstate: 'login',
  fetching: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        user: action.user
      };
    case LOGIN:
      return {
        user: action.user,
        fetching: false
      }
    case REGISTER:
    case LOGOUT:
      return {
        user: action.user
      }
    case REQUESTING_DATA:
      return {
        fetching: true
      }
    default:
      return state;
  }
};

export default authReducer;