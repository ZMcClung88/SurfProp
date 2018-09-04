import firebase from 'firebase';
import { PROPERTY_FETCH_SUCCESS } from './types';

export const propertyFetch = () => {
  const user = firebase.auth();
  console.log('user', user);

  return dispatch => {
    firebase
      .database()
      .ref(`properties`)
      .on('value', snapshot => {
        dispatch({ type: PROPERTY_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
