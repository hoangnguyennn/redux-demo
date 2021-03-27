const { TURN_ON, TURN_OFF, CHANGE_SPEED } = require('./actionTypes');

const turnOn = () => ({ type: TURN_ON });
const turnOff = () => ({ type: TURN_OFF });
const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  payload: speed
});

module.exports = {
  turnOn,
  turnOff,
  changeSpeed
};
