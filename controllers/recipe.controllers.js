const { findByIdAndDelete } = require("../model/recipe.model");
const Recipe = require("../model/recipe.model");

exports.recipeCreate = async (req, res) => {
  try {
    const { name, description, ingredients, category } = req.body;
    const newRecipe = await Recipe.create({
      name,
      description,
      ingredients,
      category,
    });
    return res.status(200).json({
      name: newRecipe.name,
      description: newRecipe.description,
      ingredients: newRecipe.ingredients,
      category: newRecipe.category,
    });
  } catch (error) {
    return res.status(400).json({ message: "create recipe error" });
  }
};

exports.recipeDelete = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
    return res.status(200).json({ message: "recipe delete success" });
  } catch (error) {
    //console.log("🚀 ~ file: recipe.controllers.js ~ line 33 ~ exports.recipeDelete ~ error", error)
    return res.status(400).json({ message: "delete recipe error" }, error);
  }
};

exports.recipeUpdate = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const { name, description, ingredients, category } = req.body;
    let recipeUpdate = await Recipe.findById(recipeId);

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, {
      name: name,
      description: description,
      ingredients: ingredients,
      category: category,
    });
    return res.status(200).json({
      name: updatedRecipe.name,
      description: updatedRecipe.description,
      ingredients: updatedRecipe.ingredients,
      category: updatedRecipe.category,
    });
  } catch (error) {
    console.log("🚀 ~ file: recipe.controllers.js ~ line 53 ~ exports.recipeUpdate= ~ error", error)
    //return res.status(400).json({ message: "update recipe error" }, error);
  }
};
