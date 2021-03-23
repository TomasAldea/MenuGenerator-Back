const { Router } = require("express");
const route = Router();
const fileParser = require('./../config/cloudinary.config');

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
.put("/recipe/:recipeId", recipeUpdate)
.delete("/recipe/:recipeId", recipeDelete)
.post('/recipe/upload', fileParser.single('image'), (req, res, next) => {
    console.log('req.file', req.file);
    if(!req.file) {
      next(new Error('No file uploaded'));
      return;
    }
    res.json(req.file.path);
  })

module.exports = route;