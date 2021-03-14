const { Router } = require("express");
const route = Router();

const {
    
recipeCreate,
recipeDelete,
recipeUpdate,
getRecipe,
getRecipes,
getRandomRecipeByCat,

} = require("../controllers/recipe.controllers.js")

route
.get("/recipe/:recipeId", getRecipe)
.get("/allrecipes" , getRecipes)
.get("/weekGenerator/:catString",getRandomRecipeByCat)
.post("/recipe", recipeCreate)
.patch("/recipe/:recipeId", recipeUpdate)
.delete("/recipe/:recipeId", recipeDelete)


module.exports = route;