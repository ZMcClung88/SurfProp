import { combineReducers } from 'redux';
import property_reducer from './property_reducer';
import auth_reducer from './auth_reducer';

export default combineReducers({
  properties: property_reducer,
  auth: auth_reducer
});
