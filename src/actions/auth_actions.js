import firebase from 'firebase';
import { LOGIN_SUCCESS, PROPERTY_FETCH_SUCCESS } from './types';

export const loginSuccess = ({ email, password }) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  console.log('status', uid);
  localStorage.setItem('user', uid);

  return dispatch => {
    console.log('here here');

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      })
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS, payload: currentUser });
      });
  };
};
