var express = require('express');

var app= express();


var port = 3600;
app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

var navbar = [
    {link:'/',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/contact',name:'Contact'}
]


var bookRouter = require('./src/routes/bookRoutes')(navbar);



app.get('/',function(req,res){
    res.render('index',{nav:navbar,title:"Node App"})
});

app.use('/books',bookRouter);

app.listen(port, function(err){
    if(err){
        console.log("server not running");
    }else{
        console.log("running on port 3600");
    }
});