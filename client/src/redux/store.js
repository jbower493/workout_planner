import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const GET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REQUESTING_USER = 'REQUESTING_USER';
const RECEIVED_USER = 'RECEIVED_USER';

const initialUserState = {
  user: false,
  name: null
};

const initialAuthState = {
  authenticated: false
};

const userReducer = (state = initialUserState, action) => {
  switch(action.type) {
    case REQUESTING_USER:
      return {
        loading: true,
        user: false,
        name: null
      };
    case RECEIVED_USER:
      return {
        loading: false,
        user: true,
        name: action.name
      }
    default:
      return state;
  }
};

const authReducer = (state = initialAuthState, action) => {
  switch(action.type) {
    case LOGIN:
      return { authenticated: true };
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk.default)
);

// action
/*const getUserAction = {
  type: GET_USER
};

// action creator
const getUserActionCreator = () => {
  return getUserAction;
};

// action creators but without predefined actions
const getUser = (name) => {
  return {
    type: GET_USER,
    name: name
  }
};

const login = () => {
  return {
    type: LOGIN
  }
};

const logout = () => {
  return {
    type: LOGOUT
  }
};*/

// action creator that returns a function so that the action can be dispatched asyncronously
const requestingUser = () => {
  return {
    type: REQUESTING_USER
  }
};

const receivedUser = name => {
  return {
    type: RECEIVED_USER,
    name: name
  }
};

const handleAsync = () => {
  return (dispatch) => {
    dispatch(requestingUser());
    setTimeout(() => {
      let data = {
        name: 'Freddy'
      }
      dispatch(receivedUser(data));
    }, 2500)
  }
};


//store.dispatch(getUser('Sideshow Bob'));

const currentState = store.getState();

// use middleware to handle asyncronous actions challenge

export const x = currentState;