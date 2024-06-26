const express = require("express");
const pokemonRouter = require("./routes/pokemon");
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

const app = express();

// Load our environment variables. Make sure you load them before you connect to your database!
require("dotenv").config();
// Connect to Database
DBConfig.connectToDatabase();

app.set("views", "./views"); // Create the views folder

app.set("view engine", "ejs");

// Middleware to register the 'public' folder as a static asset
app.use(express.static("public"));

// Middleware is similar to executing functions while the HTTP request is travelling to its final destination
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We are instructing our application to look into the routes folder and into the pokemon.js file inside that folder to manage any routes that begin with the path "/"
app.use("/", pokemonRouter);

app.listen(3500, () => {
  console.log("Express server listening on port 3500...");
});

// In Class Exercise #7 (DUE April 2nd):
// As a User, I want to visit localhost:3500/home and see a blank page with the text "Home Page"
