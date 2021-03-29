import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

// const composedEnhancer = composeWithDevTools();

const myMiddleware = (store) => (next) => (action) => {
  // console.log(store);
  // console.log(next);
  // console.log(action);

  return next(action);
};

// const asyncMiddleware = (store) => (next) => (action) => {
//   // const { getState, dispatch } = store;
//   // console.log(next);
//   if (typeof action === 'function') {
//     return action(next);
//   }

//   return next(action);
// };

const store = createStore(reducers, applyMiddleware(myMiddleware, thunk));

export default store;
