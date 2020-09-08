const express = require("express");
const app = express();

app.get("/", function(req, res){
    console.log(request);
    res.send("<h1> HELLO WORLD! </h1>");
});

app.get("/contact", function(req, res){
    res.send("contact @ rohan@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hi, I'm Rohan Mehra");
});

app.listen(3000, function() {
    console.log("Server started at Port 3000");
});