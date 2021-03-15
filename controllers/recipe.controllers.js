const { json } = require("body-parser");
const { findByIdAndDelete } = require("../model/recipes.model");
const Recipes = require("../model/recipes.model")


//-----recipe create------//
exports.recipeCreate = async (req, res) => {
  try {
 //console.log("SESSION:", req.session.currentUser._id)
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


//-----get one recipe by cat------//
/*
const countByCat = async () => {
  try {
    Recipes.countDocuments({category:'first'}).exec((err, count) => {
      if (err) {
          res.send(err);
          return;
      }
      console.log(count)
      return count;
    });
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "get random 1 error" });
  }
};
*/

//-----get one recipe by cat------//
exports.getRandomRecipeByCat = async (req, res) => {
  try {
    const { catString } = req.params;

          // Get the count of all users
      Recipes.count({category:catString}).exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)

        // Again query all users but only fetch one offset by our random #
        Recipes.findOne({category:catString}).skip(random).exec(
          function (err, result) {
            // Tada! random user
            console.log(result) 
            return res.status(200).json(result);
          })
      })

   
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "get random 2 error" });
  }
};


//-----delete create------//
exports.recipeDelete = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const deletedRecipe = await Recipes.findByIdAndDelete(recipeId);
    console.log("delete success")
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

    const updatedRecipe = await Recipes.findByIdAndUpdate(recipeId, {
      name,
      description,
      ingredients,
      category,
    });
    console.log("edit success")

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
