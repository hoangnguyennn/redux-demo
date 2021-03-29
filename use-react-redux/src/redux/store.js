import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const composedEnhancer = composeWithDevTools();

const store = createStore(reducers, composedEnhancer);
export default store;
