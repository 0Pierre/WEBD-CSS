// Set up and connect to our database

MONGO_DB_Ul = 'mongodb+srv://gonzalezmof:cisco@cluster0.x1jx44i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoose = require("mongoose");

function connectToDatabase() {
  // Cloud Database
  mongoose
    .connect(process.env.MONGO_DB_Ul)
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };