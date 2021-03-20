require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Recipe = require("../model/recipes.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, dbOptions)
        const recipes = await Recipe.create(data)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()