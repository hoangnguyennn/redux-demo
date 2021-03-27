const { createStore } = require('redux');

const initialState = {
  speed: 0,
  lastSpeed: 1
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_SPEED':
      return {
        ...state,
        speed: action.payload
      };
    case 'TURN_OFF':
      return {
        ...state,
        speed: 0,
        lastSpeed: state.speed
      };
    case 'TURN_ON':
      return {
        ...state,
        speed: state.lastSpeed
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
console.log(store.getState());
// store.dispatch({ type: 'TURN_ON' });
