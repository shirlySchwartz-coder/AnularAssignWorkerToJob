const soldiersDal = require('./../dal/soldier-dal')

async function getAllSoldiers(){
    let soldiersList= await soldiersDal.getAllSoldiers();
    return soldiersList;
 }

async function getSoldierByJobId(jobId){
    let soldiersList= await soldiersDal.getSoldierByJobId(jobId);
   return soldiersList;
}

async function getSoldiersNotOnJob(jobId){
    let freeSoldier= await soldiersDal.getSoldiersNotOnJob(jobId);
   return freeSoldier;
}

async function addSoldierToJob(  jobId, soldierId) {
    let soldierToJob = await soldiersDal.addSoldierToJob(jobId, soldierId ); 
    return soldierToJob;
}

module.exports = {
    getAllSoldiers,
    getSoldierByJobId,
    getSoldiersNotOnJob,
    addSoldierToJob
};