let connection = require("./connection-wrapper");

async function getAllJobs() {
    let sql = "select id, name  from jobs";   
    let jobs = await connection.execute(sql);
    return jobs;
}

// async function addSoldierToJob(jobId, soldierId ) {
//     let sql = `INSERT INTO soldier_to_job( job_id, soldier_id)VALUES(?,?)`;
//     let params =[ jobId, soldierId ]
//     let soldierToJob = await connection.executeWithParameters(sql, params);
//     console.log(soldierToJob)
//     return soldierToJob;

// }

module.exports = {
    getAllJobs, 
    //addSoldierToJob
};