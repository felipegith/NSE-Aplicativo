import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



let firebaseConfig = {
    apiKey: "AIzaSyADtyfNyIVa7IW8LSQMs8KQG8Xu8xT_9tI",
    authDomain: "apptask-8ac3b.firebaseapp.com",
    databaseURL: "https://apptask-8ac3b.firebaseio.com",
    projectId: "apptask-8ac3b",
    storageBucket: "apptask-8ac3b.appspot.com",
    messagingSenderId: "643504706254",
    appId: "1:643504706254:web:e1a7dcea0dfb7bf069369f",
    measurementId: "G-3JXJFGL1M2"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase




