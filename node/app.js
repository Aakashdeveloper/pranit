var express = require('express');

var app= express();

var port = 3000;


app.get('/',function(req,res){
    res.send("hi this is home page of pranit");
});

app.get('/about',function(req,res){
    res.send("this is about page")
})

app.listen(port, function(err){
    if(err){
        console.log("server not running");
    }else{
        console.log("running on port 3000");
    }
});