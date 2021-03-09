const mongoose = require("mongoose");

const weekModel = new mongoose.Schema({
  monday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  tuesday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  wednesday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  thursday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  friday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  saturday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },
  sunday: {
    first: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    second: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    desert: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("weekModel", weekModel);
