var express = require('express');
var path = require('path');
var app = express();

var ejs = require('ejs');


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen((process.env.PORT || 5000), function(err){
  if(err){ throw err; }
  console.log("Server Up & Running ......");
});