const { Router } = require("express");
const route = Router();

const { 
    getRandomRecipeByCat
 } = require("../controllers/week.controllers.js");

route
.get("/weekGenerator/:catString", getRandomRecipeByCat);


module.exports = route;