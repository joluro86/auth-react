import app from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDL8Z1XdxofM6UgbGcdCUpgp8JjEHrCPT8",
    authDomain: "crud-react-881e9.firebaseapp.com",
    projectId: "crud-react-881e9",
    storageBucket: "crud-react-881e9.appspot.com",
    messagingSenderId: "812193816483",
    appId: "1:812193816483:web:f467bd72bc40adce800416"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}


