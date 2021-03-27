const { createStore } = require('redux');
const { turnOn, turnOff, changeSpeed } = require('./actionCreators');
const { TURN_ON, TURN_OFF, CHANGE_SPEED } = require('./actionTypes');

const initialState = {
  speed: 0,
  lastSpeed: 1
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload
      };
    case TURN_OFF:
      return {
        ...state,
        speed: 0,
        lastSpeed: state.speed
      };
    case TURN_ON:
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

store.dispatch(turnOn());
store.dispatch(changeSpeed(3));
store.dispatch(turnOff());
console.log(store.getState());
