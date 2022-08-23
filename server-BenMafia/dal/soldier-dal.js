const ServerError = require('../errors/server-error');
let connection = require('./connection-wrapper');

async function getAllSoldiers(){
  try {
    let sql = `select id, name from soldiers `;
    let soldiers = await connection.execute(sql);
    //console.log(soldiers);
    return soldiers;
  } catch (error) {
    throw new ServerError(error);
  }
}
async function getSoldierByJobId(jobID) {
  try {
    let sql = `select s.id, name from soldier_to_job sj join soldiers s on sj.soldier_id = s.id where sj.job_id = ?`;
    let params = jobID;
    let soldiers = await connection.executeWithParameters(sql, params);
    console.log(soldiers);
    return soldiers;
  } catch (error) {
    throw new ServerError(error);
  }
}

async function getSoldiersNotOnJob(jobID) {
  try {
    let sql = `select soldiers.id , soldiers.name
                from soldiers 
                where soldiers.id  not in
                (select s.id  as soldier_id 
                from soldier_to_job sj  
                join soldiers s on sj.soldier_id = s.id 
                join jobs j on sj.job_id = j.id
                where sj.job_id = ?)`;
  let params = jobID;
  let freeSoldiers = await connection.executeWithParameters(sql, params);
  //console.log('freeSoldiers:' + freeSoldiers);
  return freeSoldiers;
  } catch (error) {
    throw new ServerError(error);
  }
  
}
async function addSoldierToJob(jobId, soldierId ) {
  let sql = `INSERT INTO soldier_to_job( job_id, soldier_id)VALUES(?,?)`;
  let params =[ jobId, soldierId ]
  let soldierToJob = await connection.executeWithParameters(sql, params);
  console.log(soldierToJob)
  return soldierToJob;

}
module.exports = {
  getAllSoldiers,
  getSoldierByJobId,
  getSoldiersNotOnJob,
  addSoldierToJob
};
