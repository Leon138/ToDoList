require('firebase/auth');
import firebase from 'firebase/app';
import { firebaseConfig, DataBaseURL, authUrl } from './api-config';
import { showErrorNotification, signUpErrorEmail } from '../shared/error-handlers';
import { routes } from '../shared/constants/routes';
import { setToken, setUID } from '../shared/ls-services';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};

export const initApi = () => {
  firebase.initializeApp(firebaseConfig);
}

initApi();

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
    .then(response => response)
    .catch(err => {
      signUpErrorEmail(err);
    });
}

export const passwordRecovery = email => {
  firebase.auth().sendPasswordResetEmail(email)
    .then( setTimeout( () => window.location.href = routes.sign_in, 5000))
    .catch ( error => showErrorNotification(error));
}

export const createTask = task => {
  const { taskValue, complited, date, Time} = task;
  return fetch (`${DataBaseURL}/task.json`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        taskValue, 
        complited, 
        date,
        Time
      })
    }
  )
  .then( response => response.json())  
};

export const getTask = () => {
  return fetch(`${DataBaseURL}/todos.json`,
    { 
      method: 'GET',
      headers
    }
  )
  .then( response => response.json())
  .then( result => {
    if(result) {
      const transformedTaskArr = Object.keys(result).map( key => ({
        ...result[key],
        id: key
      }))
      return transformedTaskArr;
    };
  });
};
