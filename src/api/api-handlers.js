require('firebase/auth');
import firebase from 'firebase/app';
import { firebaseConfig, DataBaseURL, authUrl } from './api-config';
import { showErrorNotification } from '../shared/error-handlers';
import axios from 'axios';

export const initApi = () => {
  firebase.initializeApp(firebaseConfig);
}

export const signIn = (email, password) => {
  return axios.post(authUrl, {
    email,
    password,
    returnSecureToken: true
  })
    .then(response => response)
    .catch(err => {
      showErrorNotification(err);
    });
}

export const signUp = async (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response);
}

initApi();
