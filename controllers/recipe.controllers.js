const { json } = require("body-parser");
const { findByIdAndDelete } = require("../model/recipes.model");
const Recipes = require("../model/recipes.model");
const User = require("../model/user.model");

//-----recipe create------//
exports.recipeCreate = async (req, res) => {
  try {
    const { name, description, ingredients, category, image } = req.body;

    const newRecipe = await Recipes.create({
      name,
      description,
      ingredients,
      category,
      owner: req.session.userId,
      image,
    });
    await User.findByIdAndUpdate(req.session.userId, {
      $push: { createsRecipes: newRecipe._id },
    });
    return res.status(200).json(
     newRecipe
    );
   
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "create recipe error", error });
  }
};

//-----get all recipes------//
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find({}).lean();
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(400).json({ message: "get recipes error" });
  }
};

//-----get one recipe------//
exports.getRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const oneRecipe = await Recipes.findById(recipeId).lean();

    return res.status(200).json(oneRecipe);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "get recipe error" });
  }
};

//-----delete create------//
exports.recipeDelete = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const deletedRecipe = await Recipes.findByIdAndDelete(recipeId);
    console.log("delete success");
    return res.status(200).json({ message: "recipe delete success" });
  } catch (error) {
    return res.status(400).json({ message: "delete recipe error" }, error);
  }
};

//-----recipe update------// 
exports.recipeUpdate = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const { name, description, ingredients, category } = req.body;

    const updatedRecipe = await Recipes.findByIdAndUpdate(recipeId, {
      name,
      description,
      ingredients,
      category,
    });
    console.log("edit success");

    return res.status(200).json({
      name: updatedRecipe.name,
      description: updatedRecipe.description,
      ingredients: updatedRecipe.ingredients,
      category: updatedRecipe.category,
    });
  } catch (error) {
    console.log("update error", error);
    return res.status(400).json({ message: "update recipe error" });
  }
};


