// Firebase Realtime Database Fixed

async function saveCloud(path,data){
 const dbRef=FirebaseAPI.ref(
  FirebaseAPI.database,
  path
 );
 return FirebaseAPI.set(dbRef,data);
}

function listenCloud(path,callback){
 const dbRef=FirebaseAPI.ref(
  FirebaseAPI.database,
  path
 );

 return FirebaseAPI.onValue(dbRef,snap=>{
   callback(snap.val());
 });
}
