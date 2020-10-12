import { GET_USER, LOGIN, REGISTER, LOGOUT } from '../actions/types';

const authReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_USER:
      return Object.assign({}, state, { user: action.user });
    case LOGIN:
      return {
        user: action.user,
      }
    case REGISTER:
    case LOGOUT:
      return {
        user: action.user
      }
    default:
      return state;
  }
};

export default authReducer;