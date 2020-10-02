import { createStore } from 'redux';

const reducer = (state = 5) => {
  return state;
};

const store = createStore(reducer);

const currentState = store.getState();



export const x = currentState;

// on the define a redux action challenge on FFC