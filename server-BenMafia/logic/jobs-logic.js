let jobsDal = require("../dal/jobs-dal");


async function getAllJobs() {
    let jobList = await jobsDal.getAllJobs(); 
    return jobList;
}

// async function addSoldierToJob(  jobId, soldierId) {
//     let soldierToJob = await jobsDal.addSoldierToJob(jobId, soldierId ); 
//     return soldierToJob;
// }


module.exports = {
    getAllJobs,
    //addSoldierToJob
};