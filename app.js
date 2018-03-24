var express = require("express");
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');

var todoRoute  = require('./routes/todos');


/* body parser (need to be before the route use) */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));

/* route use */
app.use('/api/todos', todoRoute);

/* main routes */
app.get("/", function(req,res){
    res.send("Hello! This is root page! ");
});

app.get("/test", function(req,res){
    var obj = {
                message: "Winter is coming.",
                author:  "Jon Snow"
              };
    res.send(obj);
}); 

app.listen(process.env.PORT, function(){
    console.log("The server has started.");
});