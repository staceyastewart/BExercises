import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAtzKgKaSVzfEhRKuqTpqMOKjTsVXhvu9Q",
  databaseURL: "https://happy-tails-f352f.firebaseio.com"
}

firebase.initializeApp(config);
const database = firebase.database();

export { database };
