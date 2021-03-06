const { Router } = require("express");
const route = Router();

const {
    
recipeCreate

} = require("../controllers/recipe.controllers.js")

route
.post("/recipe", recipeCreate)


module.exports = route;