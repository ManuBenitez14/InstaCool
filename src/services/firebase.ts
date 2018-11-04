import * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCErxpVt4vaj5gpucWBGM-w02cCPvwWZcM",
    authDomain: "instacool-1e0ba.firebaseapp.com",
    databaseURL: "https://instacool-1e0ba.firebaseio.com",
    messagingSenderId: "530260015847",
    projectId: "instacool-1e0ba",
    storageBucket: "instacool-1e0ba.appspot.com",
  }

  firebase.initializeApp(config)

  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

  export const auth = firebase.auth()
  export const db = firestore
  export const storage = firebase.storage()