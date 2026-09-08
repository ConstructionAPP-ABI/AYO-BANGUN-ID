// Firebase v10 modular configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { 
 getAuth,
 signInAnonymously,
 signOut,
 onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
 getDatabase,
 ref,
 set,
 get,
 onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
 getStorage,
 uploadBytes,
 getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
 apiKey: "AIzaSyCenf4TeFl64AnMREAkp4z_UvfRvgAD4lg",
 authDomain: "ayo-bangun-id.firebaseapp.com",
 projectId: "ayo-bangun-id",
 storageBucket: "ayo-bangun-id.firebasestorage.app",
 messagingSenderId: "786734475101",
 appId: "1:786734475101:web:b68155c2c53b5b4844eab4",
 measurementId: "G-W30TB6186R"
};

const firebaseApp=initializeApp(firebaseConfig);
const analytics=getAnalytics(firebaseApp);

const auth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp);
const storage=getStorage(firebaseApp);

window.FirebaseAPI={
 auth,database,storage,
 signInAnonymously,
 signOut,
 onAuthStateChanged,
 ref,set,get,onValue,
 uploadBytes,getDownloadURL
};
