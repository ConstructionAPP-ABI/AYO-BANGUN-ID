// Firebase Authentication Fixed
async function loginFirebase(email,password){
 try{
   const result=await FirebaseAPI.signInWithEmailAndPassword(
      FirebaseAPI.auth,
      email,
      password
   );

   return result.user;

 }catch(error){
   console.error("Firebase login error",error.code);
   throw error;
 }
}

function logoutFirebase(){
 return FirebaseAPI.signOut(FirebaseAPI.auth);
}

function watchAuth(callback){
 FirebaseAPI.onAuthStateChanged(
   FirebaseAPI.auth,
   callback
 );
}
