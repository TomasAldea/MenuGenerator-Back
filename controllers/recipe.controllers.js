const Recipe = require("../model/recipe.model")

exports.recipeCreate = async (req, res) => {
    try { 
        const { name, description, ingredients, category } = req.body;
        const newRecipe = await Recipe.create({name, description, ingredients, category})
        return res.status(200).json({ name: newRecipe.name, description: newRecipe.description, ingredients: newRecipe.ingredients, category: newRecipe.category });

    } catch (error) {
        return res.status(400).json({ message: "create recipe error" });
    }
}