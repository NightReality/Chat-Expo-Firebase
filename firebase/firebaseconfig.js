import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNanpCtaLqLJJDm8ps9YKAyl2ThDemb3E",
  authDomain: "chat-app-4193c.firebaseapp.com",
  projectId: "chat-app-4193c",
  storageBucket: "chat-app-4193c.appspot.com",
  messagingSenderId: "115498609978",
  appId: "1:115498609978:web:bd8bb39dfbfbbc1a153403"
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app)