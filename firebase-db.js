/*
 Firebase Database Layer
*/

const COLLECTIONS={
 USERS:"users",
 PROJECTS:"projects",
 MATERIALS:"materials",
 ATTENDANCE:"attendance",
 PROGRESS:"progress",
 REPORTS:"reports"
};

async function saveProjectCloud(project){
 console.log("Save project cloud",project);
}

async function getProjectsCloud(){
 return [];
}
