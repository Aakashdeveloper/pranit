var express = require('express');

var app= express();
var bookRouter = express.Router();

var port = 3000;
app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

var navbar = [
    {link:'/',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/contact',name:'Contact'}
]

var books =[
                {
                    title: 'War and Peace',
                    genre: 'Historical Fiction',
                    author: 'Lev Nikolayevich Tolstoy',
                    read: false
                },
                {
                    title: 'Les Misérables',
                    genre: 'Historical Fiction',
                    author: 'Victor Hugo',
                    read: false
                },
                {
                    title: 'The Time Machine',
                    genre: 'Science Fiction',
                    author: 'H. G. Wells',
                    read: false
                },
                {
                    title: 'A Journey into the Center of the Earth',
                    genre: 'Science Fiction',
                    author: 'Jules Verne',
                    read: false
                },
                {
                    title: 'The Dark World',
                    genre: 'Fantasy',
                    author: 'Henry Kuttner',
                    read: false
                },
                {
                    title: 'The Wind in the Willows',
                    genre: 'Fantasy',
                    author: 'Kenneth Grahame',
                    read: false
                },
                {
                    title: 'Life On The Mississippi',
                    genre: 'History',
                    author: 'Mark Twain',
                    read: false
                },
                {
                    title: 'Childhood',
                    genre: 'Biography',
                    author: 'Lev Nikolayevich Tolstoy',
                    read: false
                }
            ];


app.get('/',function(req,res){
    res.render('index',{nav:navbar,title:"Node App"})
});

app.get('/books',function(req,res){
    res.render('book',{nav:navbar,title:"Book Page",book:books})
});

app.get('/single',function(req,res){
    res.render('bookView',{nav:navbar,title:"Book Page",book:books})
});

app.listen(port, function(err){
    if(err){
        console.log("server not running");
    }else{
        console.log("running on port 3000");
    }
});