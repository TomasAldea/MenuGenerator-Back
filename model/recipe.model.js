const mongoose = require("mongoose");


const RecipeSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
        type: String,
        require: true,
      },
    ingredients: [],
    category: {
        type: String,
        require: true,
      },
    owner: [ { type: mongoose.Schema.Types.ObjectId, ref: "User" } ],
  });
  
  module.exports = mongoose.model("Recipe", RecipeSchema);