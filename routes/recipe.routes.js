const { Router } = require("express");
const route = Router();

const {
    
recipeCreate,
recipeDelete,
recipeUpdate,
getRecipe,
getRecipes,

} = require("../controllers/recipe.controllers.js")

route
.get("/recipe/:recipeId", getRecipe)
.get("/allrecipes" , getRecipes)
.post("/recipe", recipeCreate)
.post("/recipe/:recipeId", recipeUpdate)
.delete("/recipe/:recipeId", recipeDelete)


module.exports = route;