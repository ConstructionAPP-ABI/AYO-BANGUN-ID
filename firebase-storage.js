// Firebase Storage Fixed

async function uploadDocument(file,path){
 const storageRef=FirebaseAPI.ref(
   FirebaseAPI.storage,
   path
 );

 await FirebaseAPI.uploadBytes(storageRef,file);

 return await FirebaseAPI.getDownloadURL(storageRef);
}

async function uploadPhoto(file,path){
 return uploadDocument(file,path);
}
