var express = require('express');

var app= express();

var port = 3000;
app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{list:['Home ','About'],title:"node App"})
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