/**
 * Created by niwantha on 9/28/17.
 */
var express = require("express");
var app = express();
var port = process.env.PORT ||3000;

app.get("/",function(req,res){
    res.send("welcome to nodejs app on heroku")
});

app.listen(port);

console.log('Example app listening on port 3000!');