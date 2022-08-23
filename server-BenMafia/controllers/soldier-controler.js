

const express = require("express");
const soldierLogic = require('../logic/solider-logic')

const router = express.Router();
//Get All Users for inital
router.get('/', async (request, response, next) => {
    try {
      let soldiers = await soldierLogic.getAllSoldiers();
      response.json(soldiers);
    } catch (error) {
      return next(error);
    }
  });
  

module.exports = router;