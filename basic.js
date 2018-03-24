var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hello!");
});

app.listen(process.env.PORT, function(){
    console.log("The server has started.");
});