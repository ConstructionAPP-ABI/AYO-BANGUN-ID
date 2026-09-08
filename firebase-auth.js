// Firebase Anonymous Authentication

async function loginFirebase(){
 try{
    const result = await FirebaseAPI.signInAnonymously(
      FirebaseAPI.auth
    );

    return result.user;

 }catch(error){
    console.error('Firebase anonymous login error', error.code);
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
