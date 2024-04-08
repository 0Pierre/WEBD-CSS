

const express = require("express");

//calling
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//set up our first route
app.get("/hello-world", function(reuest, response) {
    console.log(`server has received a request at ${reuest.url}`);
    // response.send ("Hello world!");
    response.render("index.ejs", {data: "123", clothes: [
        "T-shirts",
        "polo",
        "jeans",
        "t-shirts",
        "shoes"]});
});

app.listen(3500, () => {
    console.log(`server listening on port 3500...`);
});
