import { createStore, applyMiddleware } from 'redux';

const initState = {
  info: null
};

const GET_USER_INFO = 'GET_USER_INFO';

const getUserInfo = (info) => ({
  type: GET_USER_INFO,
  payload: info
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
    default:
      return state;
  }
};

const myMiddleware = (store) => (next) => (action) => {
  console.log('action', action);

  return next(action);
};
// https://api.github.com/users/hoangnguyennn
// const

const store = createStore(reducer, applyMiddleware(myMiddleware));
