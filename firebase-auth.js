/*
 Ayo Bangun Construction V8
 Firebase Authentication Module
*/

async function loginFirebase(email,password){
 console.log("Firebase Auth login:",email);
 return {
  email,
  role:"user"
 };
}

function logoutFirebase(){
 console.log("Firebase logout");
}
