let jobsLogic = require('../logic/jobs-logic');
const express = require('express');
const soldierLogic = require('../logic/solider-logic');

const router = express.Router();

router.get('/', async (request, response, next) => {
  try {
    let jobList = await jobsLogic.getAllJobs();
    response.json(jobList);
  } catch (error) {
    return next(error);
  }
});

router.post("/:id/add/:soldierId", async (request, response, next) => {
  try {
    console.log(request.params);
      let jobId= +request.params.id
      let  soldierId = +request.params.soldierId
      console.log(jobId, soldierId)

      let soldierAddToJob = await soldierLogic.addSoldierToJob( jobId, soldierId);
      if(soldierAddToJob.affectedRows>0){
        response.status(201).json(soldierAddToJob);
      }
  }
  catch (error) {
      return next(error);
  }
});
router.get('/:id', async (request, response) => {
 
  try {
    let jobID = +request.params.id;
    let usersList = await soldierLogic.getSoldierByJobId(jobID);
    console.log(usersList);
    response.json(usersList);
  } catch (e) {
    response.status(500).send(e.message);
  }
});
router.get('/:id/freesoldiers', async (request, response) => {
    let jobID = +request.params.id;
    try {
      let freeSoldier = await soldierLogic.getSoldiersNotOnJob(jobID);
      //console.log(freeSoldier);
      response.json(freeSoldier);
    } catch (e) {
      response.status(500).send(e.message);
    }
  });
  


module.exports = router;
