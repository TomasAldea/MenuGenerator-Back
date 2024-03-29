require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env; // port 4000
const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

module.exports = async () => {
  await mongoose.connect(MONGODB_URI, dbOptions);
};
