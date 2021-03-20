const mongoose = require("mongoose");

const weekModel = new mongoose.Schema({
  first: {
    monday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    tuesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    wednesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    thursday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    friday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    saturday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    sunday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  second: {
    monday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    tuesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    wednesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    thursday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    friday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    saturday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    sunday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  dessert: {
    monday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    tuesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    wednesday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    thursday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    friday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    saturday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    sunday: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("weekModel", weekModel);
