const { Router } = require("express");
const route = Router();

const {
    
recipeCreate,
recipeDelete,
recipeUpdate,

} = require("../controllers/recipe.controllers.js")

route
.post("/recipe", recipeCreate)
.put("recipe/:recipeId", recipeUpdate)
.delete("/recipe/:recipeId", recipeDelete)


module.exports = route;