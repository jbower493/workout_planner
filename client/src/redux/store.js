import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
  auth: {
    user: null,
    authstate: 'login',
    fetching: false
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;