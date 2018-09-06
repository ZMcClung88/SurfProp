import { LOGIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log('action one', action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('action', action.payload);
      return action.payload;
    default:
      console.log('default', state);
      return state;
  }
};
