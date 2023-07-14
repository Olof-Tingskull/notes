import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDi6d58-4vCuCg36_UCdyT6fAdbBVp-Dsc",
  authDomain: "notes-6b38f.firebaseapp.com",
  projectId: "notes-6b38f",
  storageBucket: "notes-6b38f.appspot.com",
  messagingSenderId: "891172999118",
  appId: "1:891172999118:web:5c8704aa8e82f0d194a59f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getPageList = async () => {
    return await getDocs(collection(db, "pages"))
}

const getSinglePage = async () => {


}