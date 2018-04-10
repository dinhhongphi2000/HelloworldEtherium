var express = require("express")
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.get("/index",function(req,res){
    //send index.html
    res.sendFile(path.join(__dirname,"index.html"));
});
app.listen(8080,function(err){
    if(err) console.log("error");
    console.log("Server listening on http://localhost:8080");
});