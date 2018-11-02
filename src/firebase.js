import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDNYNoyfALgp3hU1KScazeBos5lB4kL40A",
    authDomain: "react-blog-df34f.firebaseapp.com",
    databaseURL: "https://react-blog-df34f.firebaseio.com",
    projectId: "react-blog-df34f",
    storageBucket: "",
    messagingSenderId: "727976723069"

  };
  firebase.initializeApp(config);
  
  export const database = firebase.database();
