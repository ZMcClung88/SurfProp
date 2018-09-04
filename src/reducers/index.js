import { combineReducers } from 'redux';
import property_reducer from './property_reducer';

export default combineReducers({
  properties: property_reducer
});
