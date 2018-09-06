import firebase from 'firebase';
import { PROPERTY_FETCH_SUCCESS } from './types';

export const propertyFetch = () => {
  console.log('property fetch', localStorage.getItem('user'));
  const uid = localStorage.getItem('user');

  return dispatch => {
    firebase
      .database()
      .ref(`properties/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: PROPERTY_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
