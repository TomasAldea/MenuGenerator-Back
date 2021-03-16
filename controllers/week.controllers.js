
const Week = require("../model/week.model");
const Recipes = require("../model/recipes.model")


//-----get one recipe by category------//
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
              return res.status(200).json({
                  name: result.name,
                  category: result.category,
                  id: result._id,
              });
            })
        })
  
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "get random 2 error" });
    }
  };