const { findByIdAndDelete } = require("../model/recipes.model");
const Recipes = require("../model/recipes.model");

//-----recipe create------//
exports.recipeCreate = async (req, res) => {
  try {
    const { name, description, ingredients, category } = req.body;

    const newRecipe = await Recipes.create({
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
    console.log("error", error)
    return res.status(400).json({ message: "create recipe error", error });
  }
};

//-----get all recipes------//
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find({}).lean()
    return res.status(200).json(recipes)
  } catch (error) {
    return res.status(400).json({ message: "get recipes error" });
  }
}


//-----get one recipe------//
exports.getRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const oneRecipe = await Recipes.findById(recipeId).lean();
   
    return res.status(200).json({
      name: oneRecipe.name,
      description: oneRecipe.description,
      ingredients: oneRecipe.ingredients,
      category: oneRecipe.category,
    });
    
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
    return res.status(200).json({ message: "recipe delete success" });
  } catch (error) {
    return res.status(400).json({ message: "delete recipe error" }, error);
  }
};

//-----recipe update------// no works!
exports.recipeUpdate = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const { name, description, ingredients, category } = req.body;
    let recipeUpdate = await Recipes.findById(recipeId);

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, {
      name,
      description,
      ingredients,
      category,
    });
    return res.status(200).json({
      name: updatedRecipe.name,
      description: updatedRecipe.description,
      ingredients: updatedRecipe.ingredients,
      category: updatedRecipe.category,
    });
  } catch (error) {
    console.log("update error", error)
    return res.status(400).json({ message: "update recipe error" });
  }
};
