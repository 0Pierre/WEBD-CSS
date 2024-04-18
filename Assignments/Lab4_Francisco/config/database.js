// Set up and connect to our database

const mongoose = require("mongoose");
MONGO_DB_Ul = 'mongodb+srv://gonzalezmof:cisco@cluster0.x1jx44i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

function connectToDatabase() {
  // Cloud Database
  mongoose
    .connect(M0ONGO_DB_Ul)
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };