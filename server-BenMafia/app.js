const express = require("express");

const errorHandler = require("./errors/error-handler");
const server = express();
const cors = require('cors')
const jobsController = require("./controllers/jobs-controller");
const soldiersController= require('./controllers/soldier-controler')


server.use(cors({origin:'http://localhost:4200'}))

// Extract the JSON from the body and create request.body object containing it: 
server.use(express.json());

server.use("/jobs", jobsController);
server.use("/soldiers", soldiersController);
server.use(errorHandler);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));



