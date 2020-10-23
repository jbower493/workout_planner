import { GET_USER, LOGIN, REGISTER, LOGOUT, REQUESTING_DATA, RECEIVED_DATA, SHOW_REGISTER, SHOW_LOGIN } from '../actions/types';

const initialState = {
  loading: false,
  user: null,
  form: 'login'
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_REGISTER:
      return {
        ...state,
        form: 'register'
      };
    case SHOW_LOGIN:
      return {
        ...state,
        form: 'login'
      };
    case REQUESTING_DATA:
      return {
        ...state,
        loading: true
      };
    case RECEIVED_DATA:
      return {
        ...state,
        loading: false
      };
    case LOGIN:
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    case REGISTER:
    default:
      return state;
  }
};

export default authReducer;